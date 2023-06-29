import React, { FC } from 'react';
import { TaskItemProps } from '../../types';
import { useTaskStore } from '../../hooks';

// item
const TaskItem = (props: TaskItemProps) => {
  const { data } = props;

  return (
    <li>{data.title} - {data.content}</li>
  );
};

// list
const TaskList: FC = () => {
  const { tasks } = useTaskStore();
  return (
    <>
      {tasks.map(task => (
        <TaskItem key={task.id} data={task} />
      ))}
    </>
  );
};

export default TaskList;
