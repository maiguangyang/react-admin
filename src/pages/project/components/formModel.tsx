import _ from 'lodash';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Button, Form, Layout, Menu, MenuProps, Tabs } from 'antd';
import { Tab } from 'rc-tabs/lib/interface';
import Sider from 'antd/es/layout/Sider';
import { Content } from 'antd/es/layout/layout';
import { IFormModelComponentProps } from '~@/types/useGraphql_hook_type';
import { useGraphql } from '~@/hooks/useGraphql';
// import { useAntdAction } from '~@/hooks/useAntd';
import { useFormModel } from '~@/hooks/useFormModel';
import { useBreadcrumb } from '~@/hooks/useBreadcrumb';

import '../styles.less';
import { FieldTemp } from './fieldTemp';
import { RenderTemp } from './renderTemp';
import { SettingTemp } from './settingTemp';
import { ITableTemp } from '../types';
import { Project, QueryProjectArgs } from '~@/__generated__/graphql';
import ChatImComponent from '~@/components/ChatIm';
// import { useAction } from '../hooks';

// const formModel: FC<IFormModelComponentProps<>> = ({ model, loading, disabled }) => {
function FormData<TData, TVariables>(props: IFormModelComponentProps<TData, TVariables>) {
  const { model, loading, disabled, onCallback } = props;
  const params = useParams();
  const navigate = useNavigate();
  // const { message } = useAntdAction();
  // const { loading, setLoading } = useAction();
  const { breadcrumb } = useBreadcrumb();
  const [menuItem, setMenuItem] = useState<MenuProps['items']>([]);

  const [form] = Form.useForm();
  // const [formAdd] = useGraphql<Project, ProjectCreateInput>(model).Create();
  // const [formEdit] = useGraphql<Project, ProjectUpdateInput>(model).Update();

  // const getProjectKeys = (): Array<ProjectKeys> => {
  //   return Object.keys({} as Record<ProjectKeys, unknown>) as Array<ProjectKeys>;
  // };

  // useEffect(() => {
  //   setLoading(addLoading !== editLoading);
  // }, [addLoading, editLoading]);

  const { onFinish } = useFormModel<TData, TVariables>({ model, loading, disabled, params, breadcrumb, navigate, onCallback });
  const [getDetail, { data }] = useGraphql<Project, QueryProjectArgs>(model, `{
    id
    name
    desc
    state
    weight
    tables {
      id
      title
      tableName
      isNav
      isAuth
      fields {
        id
        title
        name
        required
        model
        len
        comment
        index
        value
        validator
      }
    }
  }`, { id: params.id }).Detail();

  useEffect(() => {
    getDetail();
  }, []);

  useEffect(() => {
    // 获取详情
    if (params.id) {
      // if (error) {
      //   message.error(error.message);
      //   return;
      // }
      // setMenuItem([]);
      if (data) {
        const children: MenuProps['items'] = [];
        if (data.tables.length > 0) {
          _.forEach(data.tables, (item, index) => {
            children.push({ key: item.id, label: `${index + 1} - ${item.title}` });
          });
        }

        setMenuItem([{ key: 'menu_01', label: data.name, children }]);
      }
    }
  }, [data]);

  const tableTemp: ITableTemp[] = [
    { label: '实时预览', children: <>实时预览</> },
    { label: '字段管理', children: <FieldTemp /> },
    { label: '渲染管理', children: <RenderTemp /> },
    { label: '常规设置', children: <SettingTemp /> },
  ];

  // tabItems ...
  const tabItems: Tab[] = tableTemp.map((item, index) => {
    return { key: String(index), label: item.label, children: item.children };
  });

  const onReset = () => {
    form.resetFields();
  };

  return (
    <Layout style={{ background: '#fff' }}>
      <Sider width={180} style={{ background: '#fff' }}>
        <Menu
          mode="inline"
          defaultOpenKeys={['menu_01']}
          style={{ height: '100%', background: '#fff' }}
          items={menuItem}
        />
      </Sider>
      <Content style={{ padding: '10px' }}>
        <Form form={form} name="form" autoComplete="off" className='clear' scrollToFirstError onFinish={onFinish}>
          <Tabs type="card" items={tabItems} />
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
            <Button htmlType="button" onClick={onReset} style={{ marginLeft: '10px' }}>
              Reset
            </Button>
          </Form.Item>
        </Form>
      </Content>
      <ChatImComponent id={params.id} callback={getDetail} />
    </Layout>
  );
}

export default FormData;
