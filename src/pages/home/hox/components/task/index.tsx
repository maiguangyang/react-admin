import React from 'react';
import { TaskItemProps } from '../../types';
import { useTaskStore } from '../../hook';

// item
const TaskItem = (props: TaskItemProps) => {
  const { data } = props;

  return (
    <li>{data.title} - {data.content}</li>
  );
};

// list
const TaskList = () => {
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
