import _ from 'lodash';
import React, { useState }  from 'react';
import { Helmet } from 'react-helmet';
import { useNavigate, useLocation, useParams }  from 'react-router-dom';
import { useFormData, FormDefaultData, FormDefaultDataValue, Router, ComponentPropsDataType }  from '~@/hooks/formData';
import { Form, Input, InputNumber, Button, Row, Col, Switch, message, notification, Empty } from 'antd';
import { useFormModel } from './hooks';

type formDataType = FormDefaultData & {
  name: string,
  parentText: string[] | string,
  parentId: string,
  remark: string,
}

let isReadOnly: boolean = false;

export default (props: ComponentPropsDataType) => {
  if (_.isEmpty(props)) {
    return (
      <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} description={<span>缺少props数据</span>} />
    );
  }

  const location = useLocation();
  const navigate = useNavigate();
  const params = useParams();
  const [loading, setLoading] = useState<boolean>(false);
  const { handleGetDetail } = useFormModel();

  const [form] = Form.useForm();
  const [formAdd]: any = useFormData(`${props.model}Add`);
  const [formEdit]: any = useFormData(`${props.model}Edit`);

  // 如果存在id，请求详情
  if (params.id) {
    isReadOnly = !/add.*/.test(location.pathname) && !/edit.*/.test(location.pathname);
    handleGetDetail(`${props.model}Detail`, params.id)
      .then(({ data, loading }) => {
        if (loading) setLoading(loading);
        if (data) {
          if (_.isEmpty(data.parentText)) data.parentText = '0';
          data.parentText = data.parentText.split(',');
          form.setFieldsValue({...data});
        }
      })
      .catch((error: Error) => message.error(error.message))
      .finally(() => setLoading(false));
  }

  // 提交
  const onFinish = async (formData: formDataType) => {
    if (loading) {
      message.error('请勿重复提交');
      return;
    }

    // setLoading(true);
    formData.parentId   = _.isArray(formData.parentText) ? formData.parentText[formData.parentText.length - 1] : formData.parentText;
    formData.parentText = _.isArray(formData.parentText) ? formData.parentText.join() : formData.parentText;
    if (_.isEmpty(formData.parentText) || formData.parentText === '0') formData.parentId = '';

    formData.state  = typeof formData.state !== 'boolean' ? formData.state : formData.state === true ? 1 : 2;

    // return;
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
      setTimeout(() => navigate(Router.Pc[props.model].path), 1000);
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
                  ? <Button htmlType="submit" loading={loading} onClick={() => navigate(Router.Pc[`${props.model}Edit`].path.replace(':id', String(params.id)))}>编 辑</Button>
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
