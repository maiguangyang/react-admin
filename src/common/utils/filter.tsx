import _      from 'lodash';
import dayjs  from 'dayjs';

type labelType = {
  label: string,
  value: any,
}

interface FilterDataType {
  [key: string]: labelType[] | any,
}

export const FilterData: FilterDataType = {
  state: [
    { label: '正常', value: 1 },
    { label: '禁用', value: 2 },
    { label: '下架', value: 3 },
  ],
  noOrYes: [
    { label: '否', value: 1 },
    { label: '是', value: 2 },
  ],
  spec: [
    { label: '吨', value: 1 },
    { label: '件', value: 2 },
    { label: '公斤', value: 3 },
    { label: '市斤', value: 4 },
  ],

  // 时间戳转时间
  formatDate: (data: any, iteratee: string = 'YYYY-MM-DD HH:mm:ss'): string => {
    if (!data) return '';
    const text = dayjs(data).format(iteratee) || data;
    return text;
  },

  // 时间转时间戳
  formTimestamp: (data: string = dayjs().format('YYYY-MM-DD HH:mm:ss')): number => {
    if (!data) data = dayjs().format('YYYY-MM-DD HH:mm:ss');
    const text: any = dayjs(data).valueOf();
    return text;
  },
};

export function Filter(key: string, data: any = [], agm?: any): any {
  const dict = FilterData[key];

  // 如果类型是function的话，回调
  if (_.isFunction(dict)) {
    return _.isArray(agm) ? dict(data, ...agm) : dict(data, agm);
  }

  // object or array
  if (_.isObject(data) || _.isArray(data)) {
    return dict;
  }

  let item: any = dict.find((el: any) => el.value === data);

  if (!_.isEmpty(item)) {
    return item.label;
  }

  item = dict.find((el: any) => el.label === data);
  if (!_.isEmpty(item)) {
    return item.value;
  }

  return data;
};
