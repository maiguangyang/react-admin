import React, { FC, useState } from 'react';
import type { DragEndEvent } from '@dnd-kit/core';
import { DndContext } from '@dnd-kit/core';
import { restrictToVerticalAxis } from '@dnd-kit/modifiers';
import { arrayMove, SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable';
import { TableRow } from './tableRow';
import { RenderColumns } from './columns';
import { Table } from 'antd';

export const RenderTemp: FC = () => {
  const [dataSource, setDataSource] = useState([
    {
      key: '1',
      name: 'John-1',
      tableName: 'John-1',
      typeName: 'Brown',
      len: 32,
      comment: 'New York No. 1 Lake Park',
      indexName: 'New York No. 1 Lake Park',
      defaultValue: '123',
      validator: 'New York No. 1 Lake Park',
    },
    {
      key: '2',
      name: 'John-2',
      tableName: 'John-2',
      typeName: 'Brown',
      len: 32,
      comment: 'New York No. 1 Lake Park',
      indexName: 'New York No. 1 Lake Park',
      defaultValue: '123',
      validator: 'New York No. 1 Lake Park',
    },
  ]);

  const onDragEnd = ({ active, over }: DragEndEvent) => {
    if (active.id !== over?.id) {
      setDataSource((previous) => {
        const activeIndex = previous.findIndex((i) => i.key === active.id);
        const overIndex = previous.findIndex((i) => i.key === over?.id);
        return arrayMove(previous, activeIndex, overIndex);
      });
    }
  };

  return (
    <DndContext modifiers={[restrictToVerticalAxis]} onDragEnd={onDragEnd}>
      <SortableContext
        items={dataSource.map((i) => i.key)}
        strategy={verticalListSortingStrategy}
      >
        <Table
          components={{
            body: {
              row: TableRow,
            },
          }}
          rowKey="key"
          columns={RenderColumns}
          dataSource={dataSource}
        />
      </SortableContext>
    </DndContext>
  );
};
