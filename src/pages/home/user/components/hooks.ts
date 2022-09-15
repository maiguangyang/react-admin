import { useFormData }  from '~@/hooks/formData';

export const useFormModel = () => {
  const handleGetDetail = async (model: string, id: string) => {
    return await useFormData(model, `{
      id
      username
      state
      weight
    }`, {
      id,
    });
  };

  return {
    handleGetDetail,
  };
};
