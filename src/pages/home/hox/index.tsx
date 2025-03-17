import { FC } from 'react';
import ButtonWrapper from './components/button';
import TaskList from './components/task';
// import { TaskStoreProvider } from './components/task/hook';

const HomeHox: FC = () => {
  return (
    <>
      <header>header12</header>
      {/* <TaskStoreProvider> */}
      <ButtonWrapper />
      <TaskList />
      {/* </TaskStoreProvider> */}
    </>
  );
};

export default HomeHox;
