import FormData from './components/formModel';

export const useAction = () => {
  const model: string = 'Project';
  const title: string = '项目管理';

  return {
    model,
    title,
    FormData,
  };
};
