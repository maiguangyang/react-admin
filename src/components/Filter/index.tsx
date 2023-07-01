import './index.less';

import React, { FC, useState } from 'react';
import { Row, Col, Select, Radio } from 'antd';
import { IFilterLayerProps } from './types';
import { useTableListStore } from '~@/hooks/useTableList';

const { Option } = Select;

const FilterLayer: FC<IFilterLayerProps> = (props) => {
  const { onSearchCallback } = useTableListStore();

  type sortsType = {
    label: string,
    value: string,
  }

  const sortsArray: Array<sortsType> = [
    { label: '创建时间', value: 'createdAt' },
    { label: '更新时间', value: 'updatedAt' },
    { label: '删除时间', value: 'deletedAt' },
  ];

  const [selectOpen, setSelectOpen] = useState(false);
  const [sortValue, setSortValue] = useState(null);
  const [sortsWeightValue, setSortsWeightValue] = useState<string | null>(null);

  // 排序选择
  function handleRadioOnChange(e: any) {
    const target = e.target;
    const value = target.value;
    setSortValue(value.split('.')[0]);
    setSortsWeightValue(value);
    setSelectOpen(!selectOpen);
  }

  // 清除排序
  function handleSortValueOnClear() {
    setSortValue(null);
    setSortsWeightValue(null);
  }

  function sortFilter(value: any) {
    if (sortsWeightValue) {
      const option: string = sortsWeightValue.replace(`${value}.`, '');
      if (option === 'ASC') return '↑';
      if (option === 'DESC') return '↓';
    }
    return '';
  }

  return (
    <Row className="filter-layer" gutter={20}>
      {props.children}
      <Col xs={20} sm={16} md={12} lg={8} xl={6} xxl={6}>
        <div className="filter-item flex align-center">
        <span className='title'>状态：</span>
          <Select allowClear onChange={(value: number) => onSearchCallback(value, 'state')} placeholder='请选择状态'>
            <Option value={1}>启用</Option>
            <Option value={2}>禁用</Option>
          </Select>
        </div>
      </Col>
      <Col xs={20} sm={16} md={12} lg={8} xl={6} xxl={6}>
        <div className="filter-item flex align-center">
        <span className='title'>是否删除：</span>
          <Select allowClear onChange={(value: number) => onSearchCallback(value, 'isDelete')} placeholder='请选择状态'>
            <Option value={1}>正常</Option>
            <Option value={2}>删除</Option>
          </Select>
        </div>
      </Col>
      <Col xs={20} sm={16} md={12} lg={8} xl={6} xxl={6}>
        <div className="filter-item flex align-center" id='sort'>
        <span className='title'>排序：</span>
          <Select allowClear open={selectOpen} value={sortValue} optionLabelProp="label" placeholder='请选择排序'
            onBlur={() => setSelectOpen(false)}
            onFocus={() => setSelectOpen(!selectOpen)}
            onClear={() => handleSortValueOnClear()}>
            {
              sortsArray.map((item: sortsType, index: number) =>
                <Option key={index} label={`${item.label} ${sortFilter(item.value)}`} value={item.value} disabled>
                  <span>{item.label}</span>
                  <div className="right-layer" style={{float:'right', color: '#999'}}>
                    <Radio.Group value={sortsWeightValue} size='small' className='group' onChange={handleRadioOnChange}>
                      <Radio.Button value={`${item.value}.ASC`}>↑ 升</Radio.Button>
                      <Radio.Button value={`${item.value}.DESC`}>↓ 降</Radio.Button>
                    </Radio.Group>
                  </div>
                </Option>,
              )
            }
          </Select>
        </div>
      </Col>
    </Row>
  );
};

export {
  FilterLayer,
};
