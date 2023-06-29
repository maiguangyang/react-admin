import _ from 'lodash';
import React, { FC, useEffect, useState }  from 'react';
import { Helmet } from 'react-helmet';
import { useNavigate, useLocation, useParams }  from 'react-router-dom';
import { FormDefaultDataValue, useFormData }  from '~@/hooks/useFormData';
import { Form, Input, InputNumber, Button, Row, Col, Switch, message, Empty, notification } from 'antd';
import { useAllRouter } from '~@/router/hooks';
import { IFormDataType } from '../types';
import utils from '~@/utils/utils';
import { IComponentPropsDataType } from '~@/types/useFormData_hook_type';

const formModel: FC<IComponentPropsDataType> = (props) => {
  const { title, model, disabled } = props;

  const params    = useParams();
  const location  = useLocation();
  const navigate  = useNavigate();
  const [loading] = useState<boolean>(false);
  const route     = useAllRouter(model);
  const isReadOnly = !/add.*/.test(location.pathname) && !/edit.*/.test(location.pathname);

  if (_.isEmpty(props)) {
    return (
      <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} description={<span>缺少props数据</span>} />
    );
  }

  const [form] = Form.useForm();
  const [formAdd]: any = useFormData(`${model}Add`);
  const [formEdit]: any = useFormData(`${model}Edit`);

  // 获取详情
  if (params.id) {
    const { data, loading, error } = useFormData(`${model}Detail`, `{
      id
      phone
      password
      username
      state
      weight
    }`, { id: params.id });

    useEffect(() => {
      if (error) {
        message.error(error.message);
        return;
      }
      if (data) {
        if (_.isEmpty(data.parentText)) data.parentText = '0';
        data.parentText = data.parentText.split(',');
        form.setFieldsValue({...data});
      }
    }, [loading]);
  }

  // 表单提交
  const onFinish = async (formData: IFormDataType) => {
    if (loading) {
      message.error('请勿重复提交');
      return;
    }

    // setLoading(true);
    formData.state  = typeof formData.state !== 'boolean' ? formData.state : formData.state === true ? 1 : 2;

    disabled.forEach(item => {
      if (utils.isValidKey(item, formData) && formData[item]) delete formData[item];
    });

    let variables: object = {
      data: { ...formData },
    };

    let res: any = {};
    // 编辑
    if (params.id) {
      variables = {...variables, id: params.id};
      res = await formEdit({ variables }).catch((err: any) => message.error(err.message)) || {};
    } else {
      // 新增
      res = await formAdd({ variables }).catch((err: any) => message.error(err.message)) || {};
    }

    // setLoading(false);
    let resData = res.data || {};
    resData = resData[`create${model}`] || resData[`update${model}`] || {};
    if (resData.id) {
      notification.success({
        message: '温馨提示',
        description: '操作成功',
      });
      setTimeout(() => navigate(route.List), 1000);
    }
  };

  return (
    <>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <Row className="model-layer">
        <Col xs={24} sm={24} md={24} lg={20} xl={16} xxl={12}>
          <Form form={form} name="form" className='clear' initialValues={FormDefaultDataValue} scrollToFirstError onFinish={onFinish}>
            <Form.Item label="登录账户" name="phone" className='title w_50'
              hidden={disabled.includes('phone')}
              rules={[{ required: !disabled.includes('phone'), message: '请输入登录账户' }]}>
                <Input disabled={isReadOnly} allowClear placeholder='请输入登录账户' />
            </Form.Item>

            <Form.Item label="登录密码" name="password" className='title w_50'
              hidden={disabled.includes('password')}
              rules={[{ required: !disabled.includes('password'), message: '请输入登录密码' }]}>
                <Input disabled={isReadOnly} allowClear placeholder='请输入登录密码' />
            </Form.Item>

            <Form.Item label="用户名称" name="username" className='title w_50'
              hidden={disabled.includes('username')}
              rules={[{ required: !disabled.includes('username'), message: '请输入用户名称' }]}>
                <Input disabled={isReadOnly} allowClear placeholder='请输入用户名称' />
            </Form.Item>

            <Form.Item label="排序" name="weight">
              <InputNumber disabled={isReadOnly} min={1} />
            </Form.Item>

            <Form.Item label="状态" name="state" valuePropName="checked">
              <Switch disabled={isReadOnly} checkedChildren="开启" unCheckedChildren="关闭" defaultChecked />
            </Form.Item>

            <Form.Item wrapperCol={{ offset: 4 }}>
              {
                isReadOnly
                  ? <Button htmlType="submit" loading={loading} onClick={() => navigate(route.Edit.replace(':id', String(params.id)))}>编 辑</Button>
                  : <Button type="primary" htmlType="submit" loading={loading}>保 存</Button>
              }
              <Button type="link" htmlType="button" onClick={() => navigate(-1)}>取 消</Button>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    </>
  );
};

export default formModel;
