import { RouteObject } from '~@/router/types';

// isValidKey ...
function isValidKey(key: string | number | symbol, object: object): key is keyof typeof object {
  return key in object;
}

// firstChildPath ...
const firstChildPath = (item: RouteObject) => {
  let path = item.path ?? '';
  if (item.children?.length) {
    const subPath = firstChildPath(item.children[0]);
    if (subPath) path += `/${subPath}`;
  }
  return path;
};

// checkIsFormModel ...
const checkIsFormModel = (text: string) => {
  // const isFormModel = !/add/.test(text) && !/edit.*/.test(text) && !/\w{8}(-\w{4}){3}-\w{12}.*/.test(text);
  const isFormModel = !/add/.test(text) && !/:id.*/.test(text);
  return isFormModel;
};

// 获取列表的Route
const getListRoutePath = (breadcrumb: RouteObject[]) => {
  return breadcrumb.filter(item => item.path !== 'none').pop()?.path ?? '/';
};

// 导出
export default {
  isValidKey,
  firstChildPath,
  checkIsFormModel,
  getListRoutePath,
};
