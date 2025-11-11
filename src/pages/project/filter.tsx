import { Col, Input } from "antd";
import { FC } from "react";
import { FilterLayer } from "~@/components/Filter";
import { useTableListStore } from "~@/hooks/useTableList";

const { Search } = Input;

// FilterWrapper ...
export const FilterWrapper: FC = () => {
  const { onSearchCallback } = useTableListStore();

  return (
    <FilterLayer>
      <Col xs={20} sm={16} md={12} lg={8} xl={6} xxl={6}>
        <div className="filter-item flex align-center">
          <span className="title">类别名称：</span>
          <Search
            placeholder="输入类别名称"
            onSearch={(value: string) => onSearchCallback(value, "name_like")}
          />
        </div>
      </Col>
    </FilterLayer>
  );
};
