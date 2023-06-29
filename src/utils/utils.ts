import { RouteObject } from '~@/router/types';

function isValidKey(key: string | number | symbol, object: object): key is keyof typeof object {
  return key in object;
};

const firstChildPath = (item: RouteObject) => {
  let path = item.path ?? '';
  if (item.children?.length) {
    const subPath = firstChildPath(item.children[0]);
    if (subPath) path += `/${subPath}`;
  }
  return path;
};

const checkIsFormModel = (text: string) => {
  const isFormModel = !/add/.test(text) && !/edit.*/.test(text) && !/\w{8}(-\w{4}){3}-\w{12}.*/.test(text);
  return isFormModel;
};

// 导出
export default {
  isValidKey,
  firstChildPath,
  checkIsFormModel,
};
