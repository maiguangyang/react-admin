import { IFormDataType } from '~@/pages/project/types';
import { IFormModelType } from '~@/types/useFormModel_hook_type';
import utils from '~@/utils/utils';
import { useAntdAction } from './useAntd';

// export const useFormModel: = (props: IFormModelType) => {
export function useFormModel<TData, TVariables>(props: IFormModelType<TData, TVariables>) {
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
    formData.state  = typeof formData.state !== 'boolean' ? formData.state : formData.state === true ? 1 : 2;

    disabled.forEach(item => {
      if (utils.isValidKey(item, formData) && formData[item]) delete formData[item];
    });

    let variables: TVariables = {
      data: { ...formData },
    };

    // let res: any = {};
    // 编辑
    if (params.id) {
      variables = {...variables, id: params.id};
      // res = await formEdit({ variables }).catch((err: any) => message.error(err.message)) || {};
    }
    // else {
    //   // 新增
    //   // res = await formAdd({ variables }).catch((err: any) => message.error(err.message)) || {};
    // }

    const res = await onCallback?.({ variables }).catch((err) => message.error(err.message)) || {};

    // setLoading(false);
    let resData = res.data || {};
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
