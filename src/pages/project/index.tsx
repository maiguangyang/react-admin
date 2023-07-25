import _ from 'lodash';
import React, { FC, useCallback, useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Card, Col, Dropdown, Empty, MenuProps, Progress, Row, Spin, Tooltip } from 'antd';
import { ExclamationCircleFilled, CiOutlined, CloudSyncOutlined, CloudDownloadOutlined, EllipsisOutlined } from '@ant-design/icons';
import { Filter } from '~@/utils/filter';

import { IColumnsDataType } from '~@/types/extract_utils_type';
import { useAction } from './hooks';
import { IColumnType, IProject, IProjectResultType } from './types';
import { useAntdAction } from '~@/hooks/useAntd';
import { useGraphql } from '~@/hooks/useGraphql';
import Meta from 'antd/es/card/Meta';
import { IFilterInputType } from '~@/types/useTableList_hook_type';
import { ISortInputType } from '~@/types/table_service_type';
import { GenerateVariable, ExtractColumnIndex } from '~@/hooks/useTableList';
import { QueryProjectsArgs } from '~@/__generated__/graphql';
import ChatImComponent from '~@/components/ChatIm';

import './styles.less';

const sortInput: ISortInputType[] = [{weight: 'ASC'}];

// 获取列表数据
const columns: IColumnsDataType<IColumnType>[] = [
  {
    title: '项目名称',
    dataIndex: 'name',
    align: 'center',
  },
  {
    title: '项目描述',
    dataIndex: 'desc',
    align: 'center',
    ellipsis: {
      showTitle: false,
    },
    render: (data: string) => (
      <Tooltip placement="top" title={data}>
        {data}
      </Tooltip>
    ),
  },
  {
    title: '下载次数',
    align: 'center',
    width: 200,
    render: () => {
      return 1;
    },
  },
  {
    title: '最后下载时间',
    dataIndex: 'createdAt',
    align: 'center',
    width: 200,
    render: (data: string) => Filter('formatDate', data),
  },
];

const ProjectPage: FC = () => {
  const navigate  = useNavigate();
  const [tableData, setTableData] = useState<IProjectResultType | null | undefined>(null);
  const filterInputRef = useRef<IFilterInputType>({});
  const sortInputRef = useRef<ISortInputType[]>(sortInput);
  const { model } = useAction();
  const { notification, modal, message, destroy } = useAntdAction();

  const [mutation] = useGraphql(`mutation GptBuildProject($id: String!) {
    gptBuildProject(id: $id)
  }`).Mutation();

  const { variables } = GenerateVariable(filterInputRef.current, sortInputRef.current);
  const fields: string = ExtractColumnIndex(columns, ['isDelete']);

  // const [getList, { loading, data }] = useGraphql<IFormTempTableListType<ITabelColumnType>>(`${model}s`, fields, variables);
  const [getList, { loading, data }] = useGraphql<IProjectResultType, QueryProjectsArgs>(model, fields, variables).List();

  useEffect(() => {
    getList();
  }, []);

  useEffect(() => {
    if (data) setTableData(data);
  }, [data]);

  // 同步
  const downLoadConfirm = (event: React.MouseEvent<HTMLSpanElement, MouseEvent>, row: IProject) => {
    event.stopPropagation();
    modal.confirm({
      title: '温馨提示',
      icon: <ExclamationCircleFilled />,
      content: '是否要对该项目进行同步操作？',
      async onOk() {
        destroy.destroyAll();
        notification.success({
          message: '温馨提示',
          description: '后台执行中，请留意同步进度',
        });
        handleTableDataRowUpdate(true, row.id);
        await mutation({ variables: { id: row.id } })
          .then(() => {
            message.success('同步任务完成');
          })
          .catch(() => {
            message.error('同步任务出错');
          })
          .finally(() => {
            handleTableDataRowUpdate(false, row.id);
          });
      },
    });
  };

  // handleTableDataRowUpdate ...
  const handleTableDataRowUpdate = (value: boolean, id: string) => {
    setTableData((oldValue) => {
      const cloneData = _.cloneDeep(oldValue);
      cloneData?.data.forEach(item => {
        if (item.id === id) {
          item.isBuild = value;
          if (!value) item.percent = 100;
        }
      });
      if (value) handleRowTimes(id);
      return cloneData;
    });
  };

  // 使用一个定时器计算编译进度条
  const handleRowTimes = useCallback((id: string) => {
    if (!tableData) return;
    setTimeout(() => {
      setTableData((oldValue) => {
        const cloneData = _.cloneDeep(oldValue);
        cloneData?.data.forEach(item => {
          if (item.id === id) {
            if (item.percent === undefined) item.percent = 0;
            const percent = item.percent < 50 ? 4 : 1;

            if (item.percent < 100) {
              item.percent += percent;
              handleRowTimes(id);
            }
          }
        });

        return cloneData;
      });
    }, 250);
  }, [data]);

  // // navigateTo ...
  // const navigateTo = (event: React.MouseEvent<HTMLSpanElement, MouseEvent>, url: string) => {
  //   event.stopPropagation();
  //   navigate(url);
  // };

  const handleOnCi = (event: React.MouseEvent<HTMLSpanElement, MouseEvent>, row: IProject) => {
    event.stopPropagation();
    console.log('row', row);
    message.success('这是ci操作：在线编译打包');
  };

  const handleButtonClick = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent> | React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.stopPropagation();
  };

  const items: MenuProps['items'] = [
    { key: '1', label: (<Button type='link' onClick={handleButtonClick}>管理后台</Button>) },
    { key: '2', label: (<Button type='link' onClick={handleButtonClick}>服务端Api</Button>) },
    { key: '3', label: (<Button type='link' onClick={handleButtonClick}>删除项目</Button>) },
  ];

  return (
    <>
      {
        !tableData || tableData?.data.length <= 0
          ? <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
          : <Row gutter={[16, 24]}>
              {
                tableData?.data.map((item) => {
                  return (
                    <Col key={item.id} className="gutter-row" span={6} xxl={4} xl={6} lg={8} md={12} sm={24} xs={24}>
                      {
                        !item.isBuild
                          ? null
                          : <div className="progress-layer">
                            <Spin />
                          </div>
                      }

                      <Card style={{ padding: '1px' }}
                        loading={loading}
                        hoverable
                        cover={<img alt="example" src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" />}
                        actions={[
                          <Tooltip key="cloudSync" title="同步更改内容">
                            <CloudSyncOutlined style={{ fontSize: '20px' }} onClick={(e) => downLoadConfirm(e, item)} />
                          </Tooltip>,
                          <Tooltip key="ci" title="在线编译打包">
                            <CiOutlined style={{ fontSize: '20px' }} onClick={(e) => handleOnCi(e, item)} />
                          </Tooltip>,
                          <Tooltip key="download" title="下载编译文件">
                            <CloudDownloadOutlined style={{ fontSize: '20px' }} onClick={(e) => handleOnCi(e, item)} />
                          </Tooltip>,
                          <Tooltip key="ellipsis" title="在线预览">
                            <Dropdown menu={{ items }} placement="bottomRight" arrow>
                              <EllipsisOutlined style={{ fontSize: '20px' }} onClick={(e) => handleOnCi(e, item)} />
                            </Dropdown>
                          </Tooltip>,
                        ]}
                        onClick={() => navigate(item.id)}
                      >
                        <Meta className='meta-layer' title={item.name} description={item.desc} />
                      </Card>
                      {
                        !item.isBuild
                          ? null
                          : <div className="ant-progress-layer">
                            <Progress showInfo={false} strokeColor='#52c41a' percent={item.percent ?? 0} />
                          </div>
                      }
                    </Col>
                  );
                })
              }
            </Row>
      }
      <ChatImComponent callback={getList} />
    </>
  );
};

export default ProjectPage;
