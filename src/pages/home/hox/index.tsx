import React from 'react';
import ButtonWrapper from './components/button';
import TaskList from './components/task';
// import { TaskStoreProvider } from './components/task/hook';

const HomeHox = () => {
  return (
    <>
      <header>header</header>
      {/* <TaskStoreProvider> */}
        <ButtonWrapper />
        <TaskList />
      {/* </TaskStoreProvider> */}
    </>
  );
};

export default HomeHox;
