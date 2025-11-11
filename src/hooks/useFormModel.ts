/*
 * @Author: Marlon.M
 * @Email: maiguangyang@163.com
 * @Date: 2025-11-11 07:55:57
 */
import { IFormDataType } from '~@/pages/project/types';
import { IFormModelType } from '~@/types/useFormModel_hook_type';
import utils from '~@/utils/utils';
import { useAntdAction } from './useAntd';
import { OperationVariables } from '@apollo/client';

// export const useFormModel: = (props: IFormModelType) => {
export function useFormModel<TData, TVariables>(props: IFormModelType<TData, TVariables extends OperationVariables ? TVariables : OperationVariables>) {
  const { model, loading, onCallback, disabled, params, breadcrumb, navigate } = props;
  const { message, notification } = useAntdAction();

  // 表单提交
  const onFinish = async (formData: IFormDataType) => {
    if (loading) {
      notification.error({
        message: '温馨提示',
        description: '请勿重复提交',
      });
      return;
    }

    // setLoading(true);
    formData.state = typeof formData.state !== 'boolean' ? formData.state : formData.state === true ? 1 : 2;

    disabled.forEach(item => {
      if (utils.isValidKey(item, formData) && formData[item]) delete formData[item];
    });

    let variables: any = {
      data: { ...formData },
    };

    // let res: any = {};
    // 编辑
    if (params.id) {
      variables = { ...variables, id: params.id };
      // res = await formEdit({ variables }).catch((err: any) => message.error(err.message)) || {};
    }
    // else {
    //   // 新增
    //   // res = await formAdd({ variables }).catch((err: any) => message.error(err.message)) || {};
    // }

    // const res = await onCallback?.({ variables }).catch((err) => message.error(err.message)) || {};
    // setLoading(false);

    const res = (await onCallback?.(variables).catch((err) => {
      message.error(err.message);
      return null;
    })) || {};


    let resData = res.data as Record<string, any>;;

    resData = resData[`create${model}`] || resData[`update${model}`] || {};
    if (resData.id) {
      message.success('操作成功');
      const url = utils.getListRoutePath(breadcrumb);
      setTimeout(() => navigate(url), 1000);
    }
  };

  return {
    onFinish,
  };
}
