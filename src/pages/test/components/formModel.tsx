import { useEffect } from 'react';
import { Form, Tabs } from 'antd';
import { useNavigate, useParams } from 'react-router-dom';
import { Tab } from 'rc-tabs/lib/interface';
import { useGraphql } from '~@/hooks/useGraphql';
import { useBreadcrumb } from '~@/hooks/useBreadcrumb';
import { useAntdAction } from '~@/hooks/useAntd';
import { useFormModel } from '~@/hooks/useFormModel';
import { HelmetWrapper } from '~@/services/table_service';
import { GenerateFormTemp } from './formTemp';
import { IFormModelComponentProps } from '~@/types/useGraphql_hook_type';
import { Project, QueryProjectArgs } from '~@/__generated__/graphql';
import { useAction } from '../hooks';

export function FormData<TData, TVariables>(props: IFormModelComponentProps<TData, TVariables>) {
  const { model, loading, disabled, onCallback } = props;
  const params = useParams();
  const navigate = useNavigate();
  const { message } = useAntdAction();
  const { title, isReadOnly } = useAction();
  const { breadcrumb } = useBreadcrumb();

  const [form] = Form.useForm();

  const { onFinish } = useFormModel<TData, TVariables>({ model, loading, disabled, params, breadcrumb, navigate, onCallback });

  // 获取详情
  if (params.id) {
    const [_, { data, loading, error }] = useGraphql<Project, QueryProjectArgs>(model, `{
      id
      name
      desc
      state
      weight
    }`, { id: params.id }).Detail();

    useEffect(() => {
      if (error) message.error(error.message);
      else if (data) form.setFieldsValue({ ...data });
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
}

export default FormData;
