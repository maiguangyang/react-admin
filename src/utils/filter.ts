import _      from 'lodash';
import dayjs  from 'dayjs';
import { IValueBaseType } from '~@/types/base_type';

type labelType = {
  label: string,
  value: IValueBaseType,
}

interface FilterDataType {
  [key: string]: labelType[] | Function,
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
  formatDate: (data: string | number, iteratee = 'YYYY-MM-DD HH:mm:ss'): string => {
    if (!data) return '';
    const text = dayjs(data).format(iteratee) || data;
    return text.toString();
  },

  // 时间转时间戳
  formTimestamp: (data: string = dayjs().format('YYYY-MM-DD HH:mm:ss')): number => {
    if (!data) data = dayjs().format('YYYY-MM-DD HH:mm:ss');
    const text = dayjs(data).valueOf();
    return text;
  },
};

export function Filter(key: string, data: string | IValueBaseType[] = [], agm?: IValueBaseType) {
  const dict = FilterData[key];

  // 如果类型是function的话，回调
  if (_.isFunction(dict)) {
    return _.isArray(agm) ? dict(data, ...agm) : dict(data, agm);
  }

  // object or array
  if (_.isObject(data) || _.isArray(data)) {
    return dict;
  }

  if (_.isArray(dict)) {
    let item = dict.find((el) => el.value === data);

    if (!_.isEmpty(item)) {
      return item.label;
    }

    item = dict.find((el) => el.label === data);

    if (!_.isEmpty(item)) {
      return item.value;
    }
  }

  return data;
}
