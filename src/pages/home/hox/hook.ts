import { useState } from 'react';
import { createGlobalStore } from 'hox';
import { TaskItemFields } from './types';

export const [useTaskStore, getAccountStore] = createGlobalStore(() => {
  const [tasks, setTasks] = useState<TaskItemFields[]>([]);

  function addTask(task: TaskItemFields) {
    setTasks(v => [...v, task]);
  }

  function removeTask(task: TaskItemFields) {
    setTasks(v => v.filter(item => item.id !== task.id));
  }

  return {
    tasks,
    addTask,
    removeTask,
  };
});
