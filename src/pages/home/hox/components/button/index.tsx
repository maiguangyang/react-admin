import React from 'react';
import { useTaskStore } from '../../hook';

const ButtonWrapper = () => {
  const { addTask } = useTaskStore();

  const handleTaskAdd = () => {
    const time = new Date().getTime().toString();

    addTask({
      id: time,
      title: 'title',
      content: `content_${time}`,
    });
  };

  return (
    <button onClick={handleTaskAdd}>Add</button>
  );
};

export default ButtonWrapper;
