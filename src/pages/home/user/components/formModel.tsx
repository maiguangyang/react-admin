import _ from 'lodash';
import React, { useEffect, useState }  from 'react';
import { Helmet } from 'react-helmet';
import { useNavigate, useLocation, useParams }  from 'react-router-dom';
import { FormDefaultDataValue, ComponentPropsDataType, useFormData }  from '~@/hooks/formData';
import { Form, Input, InputNumber, Button, Row, Col, Switch, message, Empty, notification } from 'antd';
import { useAllRouter } from '~@/router/hooks';
import { FormDataType } from '../types';

export default (props: ComponentPropsDataType) => {
  const params    = useParams();
  const location  = useLocation();
  const navigate  = useNavigate();
  const [loading] = useState<boolean>(false);
  const route     = useAllRouter(props.model);
  const isReadOnly = !/add.*/.test(location.pathname) && !/edit.*/.test(location.pathname);

  if (_.isEmpty(props)) {
    return (
      <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} description={<span>缺少props数据</span>} />
    );
  }

  const [form] = Form.useForm();
  const [formAdd]: any = useFormData(`${props.model}Add`);
  const [formEdit]: any = useFormData(`${props.model}Edit`);

  // 获取详情
  if (params.id) {
    const { data, loading, error } = useFormData(`${props.model}Detail`, `{
      id
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
  const onFinish = async (formData: FormDataType) => {
    if (loading) {
      message.error('请勿重复提交');
      return;
    }

    // setLoading(true);
    formData.state  = typeof formData.state !== 'boolean' ? formData.state : formData.state === true ? 1 : 2;

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
    resData = resData[`create${props.model}`] || resData[`update${props.model}`] || {};
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
        <title>{props.title}</title>
      </Helmet>
      <Row className="model-layer">
        <Col xs={24} sm={24} md={24} lg={20} xl={16} xxl={12}>
          <Form form={form} name="form" className='clear' initialValues={FormDefaultDataValue} scrollToFirstError onFinish={onFinish}>
            <Form.Item label="用户名称" name="username" className='title w_50' rules={[{ required: true, message: '请输入用户名称' }]}>
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
