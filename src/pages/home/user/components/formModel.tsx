import _ from 'lodash';
import React, { useEffect }  from 'react';
import { Helmet } from 'react-helmet';
import { useNavigate, useLocation, useParams }  from 'react-router-dom';
import { useFormData, FormDefaultData, FormDefaultDataValue, Router, ComponentPropsDataType }  from '~@/hooks/formData';
import { Form, Input, Cascader, InputNumber, Button, Row, Col, Switch, message, notification, Empty } from 'antd';

type formDataType = FormDefaultData & {
  name: string,
  parentText: string[] | string,
  parentId: string,
  remark: string,
}

type cascaderType = {
  id: string | null,
  name: string,
  children?: cascaderType,
}

type formTempType = {
  cascader: cascaderType[],
}

type fieldNamesType = {
  label: string,
  value: string,
  children: string,
}

const fieldNames: fieldNamesType = {
  label: 'name',
  value: 'id',
  children: 'children',
};

const { TextArea } = Input;

// 表单模板数据
const formTemp: formTempType = {
  cascader: [{ id: '0', name: '一级分类' }],
};

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

  const [form] = Form.useForm();

  const variables = {
    perPage: 0,
    filter: {
      id_ne: params.id,
      parentId_null: true,
    },
  };

  const { loading, data }: any = useFormData(`${props.model}s`, `{
    id
    name
    parentText
    parentId
    children {
      id
      name
      children {
        ...FragmentFields
      }
    }
  }`, variables, [], true);

  if (data && !_.isEmpty(data.data)) {
    const translator = (children: any) => {
      children.forEach((item: any, index: number) => {
        item.value = item.id;
        item.label = item.name;
        if (item.id === params.id) children.splice(index, 1);
        else if (item.children && item.children.length > 0) translator(item.children);
      });
    };

    translator(data.data);

    formTemp.cascader = [{ id: '0', name: '一级分类' }].concat(data.data);
  }

  const [formAdd]: any = useFormData(`${props.model}Add`);
  const [formEdit]: any = useFormData(`${props.model}Edit`);

  // 如果存在id，请求详情
  if (params.id) {
    isReadOnly = !/add.*/.test(location.pathname) && !/edit.*/.test(location.pathname);

    const { loading, data }: any = useFormData(`${props.model}Detail`, `{
      id
      name
      parentText
      parentId
      remark
      state
      weight
    }`, {
      id: params.id,
    });

    useEffect(() => {
      if (data) {
        if (_.isEmpty(data.parentText)) data.parentText = '0';
        data.parentText = data.parentText.split(',');
        form.setFieldsValue({...data});
      }
    }, [loading]);
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

    // formData.parentText = _.isArray(formData.parentText) ? formData.parentText.join() : formData.parentText;
    // if (_.isEmpty(data.parentText)) data.parentId = '';

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
            <Form.Item label="分类名称" name="name" className='title w_50' rules={[{ required: true, message: '请输入分类名称' }]}>
              <Input disabled={isReadOnly} allowClear placeholder='请输入分类名称' />
            </Form.Item>

            <Form.Item label="所属分类" name="parentText" className="clear" rules={[{ required: true, message: '请选择所属分类' }]}>
              <Cascader disabled={isReadOnly} allowClear changeOnSelect options={formTemp.cascader} fieldNames={fieldNames} placeholder="请选择所属分类" />
            </Form.Item>

            <Form.Item label="备注" name="remark" className="title content">
              <TextArea disabled={isReadOnly} placeholder="请输入备注" autoSize={{ minRows: 3, maxRows: 6 }} />
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
