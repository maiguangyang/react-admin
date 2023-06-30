import _ from 'lodash';
import React, { FC, useEffect }  from 'react';
import { useNavigate, useParams }  from 'react-router-dom';
import { useGraphql }  from '~@/hooks/useGraphql';
import { Form, Empty, Tabs } from 'antd';
import { IComponentPropsDataType } from '~@/types/useGraphql_hook_type';
import { useBreadcrumb } from '~@/hooks/useBreadcrumb';
import { useAntdAction } from '~@/hooks/useAntd';
import { Tab } from 'rc-tabs/lib/interface';
import { useFormModel } from '~@/hooks/useFormModel';
import { useAction } from '../hooks';
import { GenerateFormTemp } from './formTemp';
import { HelmetWrapper } from '~@/services/table_service';

const formModel: FC<IComponentPropsDataType> = (props) => {
  const { title, model, disabled } = props;
  const navigate  = useNavigate();

  const params    = useParams();
  const { breadcrumb } = useBreadcrumb();
  const { message } = useAntdAction();
  const { isReadOnly, loading, setLoading } = useAction();

  if (_.isEmpty(props)) {
    return (
      <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} description={<span>缺少props数据</span>} />
    );
  }

  const [form] = Form.useForm();
  const [formAdd, { addLoading }] = useGraphql(`${model}Add`);
  const [formEdit, { editLoading }] = useGraphql(`${model}Edit`);

  useEffect(() => {
    setLoading(addLoading !== editLoading);
  }, [addLoading, editLoading]);

  const { onFinish } = useFormModel({ model, loading, formAdd, formEdit, disabled, params, breadcrumb, navigate });

  // 获取详情
  if (params.id) {
    const { data, loading, error } = useGraphql(`${model}Detail`, `{
      id
      name
      desc
      state
      weight
    }`, { id: params.id });

    useEffect(() => {
      if (error) message.error(error.message);
      else if (data) form.setFieldsValue({...data});
    }, [loading]);
  }

  // 表单模板
  const formTemp = GenerateFormTemp({ form, disabled, loading, isReadOnly, onFinish });
  // tabItems ...
  const tabItems: Tab[] = formTemp.map((item, index) => {
    return { key: String(index), label: title, children: item };
  });

  return (
    <HelmetWrapper title={title}>
      <Tabs type="card" items={tabItems} />
    </HelmetWrapper>
  );
};

export default formModel;
