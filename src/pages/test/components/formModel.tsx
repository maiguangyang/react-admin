/*
 * @Author: Marlon.M
 * @Email: maiguangyang@163.com
 * @Date: 2025-11-11 07:55:57
 */
import { Form, Tabs } from "antd";
import { Tab } from "rc-tabs/lib/interface";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Project, QueryProjectArgs } from "~@/__generated__/graphql";
import { useAntdAction } from "~@/hooks/useAntd";
import { useBreadcrumb } from "~@/hooks/useBreadcrumb";
import { useFormModel } from "~@/hooks/useFormModel";
import { useGraphql } from "~@/hooks/useGraphql";
import { HelmetWrapper } from "~@/services/table_service";
import { IFormModelComponentProps } from "~@/types/useGraphql_hook_type";
import { useAction } from "../hooks";
import { GenerateFormTemp } from "./formTemp";

export function FormData<TData, TVariables>(
  props: IFormModelComponentProps<TData, TVariables>
) {
  const { model, loading, disabled, onCallback } = props;
  const params = useParams();
  const navigate = useNavigate();
  const { message } = useAntdAction();
  const { title, isReadOnly } = useAction();
  const { breadcrumb } = useBreadcrumb();

  const [form] = Form.useForm();

  const { onFinish } = useFormModel<TData, TVariables>({
    model,
    loading,
    disabled,
    params,
    breadcrumb,
    navigate,
    onCallback,
  });

  // 获取详情
  if (params.id) {
    const [, { data, loading, error }] = useGraphql<Project, QueryProjectArgs>(
      model,
      `{
      id
      name
      desc
      state
      weight
    }`,
      { id: params.id }
    ).Detail();

    useEffect(() => {
      if (error) message.error(error.message);
      else if (data) form.setFieldsValue({ ...data });
    }, [loading]);
  }

  // 表单模板
  const formTemp = GenerateFormTemp({
    form,
    disabled,
    loading,
    isReadOnly,
    onFinish,
  });
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
