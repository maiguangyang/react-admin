import _ from 'lodash';
import React, { FC, useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Card, Col, Dropdown, MenuProps, Progress, Row, Spin, Tooltip } from 'antd';
import { ExclamationCircleFilled, CiOutlined, CloudSyncOutlined, CloudDownloadOutlined, EllipsisOutlined } from '@ant-design/icons';
import { Filter } from '~@/utils/filter';

import { IColumnsDataType } from '~@/types/extract_utils_type';
import { useAction } from './hooks';
import { ITabelColumnType } from './types';
import { useAntdAction } from '~@/hooks/useAntd';
import { ExtractColumnIndex, useGraphql } from '~@/hooks/useGraphql';
import Meta from 'antd/es/card/Meta';
import { GenerateVariable } from '~@/services/table_service';
import { IFilterInputType } from '~@/types/useTableList_hook_type';
import { IFormTempTableListType, ISortInputType } from '~@/types/table_service_type';
import './styles.less';

const sortInput: ISortInputType[] = [{weight: 'ASC'}];

const ProjectPage: FC = () => {
  const navigate  = useNavigate();
  const [tableData, setTableData] = useState<IFormTempTableListType<ITabelColumnType>>();
  const filterInputRef = useRef<IFilterInputType>({});
  const sortInputRef = useRef<ISortInputType[]>(sortInput);
  const { model } = useAction();
  const { notification, modal, message, destroy } = useAntdAction();

  const [mutation] = useGraphql(`mutation GptBuildProject($id: String!) {
    gptBuildProject(id: $id)
  }`);

  // 获取列表数据
  const columns: IColumnsDataType<ITabelColumnType>[] = [
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
      render: (data: string, row) => {
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

  const { variables } = GenerateVariable(filterInputRef.current, sortInputRef.current);
  const fields: string = ExtractColumnIndex(columns, ['isDelete']);
  const [getList, { loading, data }] = useGraphql<IFormTempTableListType<ITabelColumnType>>(`${model}s`, fields, variables);

  useEffect(() => {
    getList();
  }, []);

  useEffect(() => {
    setTableData(data);
  }, [data]);

  // 同步
  const downLoadConfirm = (event: React.MouseEvent<HTMLSpanElement, MouseEvent>, row: ITabelColumnType) => {
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
        await mutation({ variables: { id: row.id } });
        handleTableDataRowUpdate(false, row.id);
        message.success('同步任务完成');
      },
    });
  };

  // handleTableDataRowUpdate ...
  const handleTableDataRowUpdate = (value: boolean, id: string) => {
    setTableData((oldValue) => {
      const cloneData = _.cloneDeep(oldValue);
      cloneData?.data.forEach(item => {
        if (item.id === id) {
          if (!value) item.percent = 100;
          else item.isBuild = value;
        }
      });
      handleRowTimes(id);
      return cloneData;
    });
  };

  // 使用一个定时器计算编译进度条
  const handleRowTimes = (id: string) => {
    if (!data) return;
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
            } else {
              item.isBuild = false;
            }
          }
        });

        return cloneData;
      });
    }, 250);
  };

  // // navigateTo ...
  // const navigateTo = (event: React.MouseEvent<HTMLSpanElement, MouseEvent>, url: string) => {
  //   event.stopPropagation();
  //   navigate(url);
  // };

  const handleOnCi = (event: React.MouseEvent<HTMLSpanElement, MouseEvent>, row: ITabelColumnType) => {
    event.stopPropagation();
    message.success('这是ci操作：在线编译打包');
  };

  const items: MenuProps['items'] = [
    { key: '1', label: (<Button type='link'>管理后台</Button>) },
    { key: '2', label: (<Button type='link'>服务端Api</Button>) },
  ];

  return (
    <Row gutter={[16, 24]}>
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
                    <CloudDownloadOutlined style={{ fontSize: '20px' }} />
                  </Tooltip>,
                  <Tooltip key="ellipsis" title="在线预览">
                    <Dropdown menu={{ items }} placement="bottomRight" arrow>
                      <EllipsisOutlined style={{ fontSize: '20px' }} />
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
  );
};

export default ProjectPage;
