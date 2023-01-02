import { FC } from 'react';
import { TodoForm } from './todoForm';
import { TodoList } from './todoList';

export const Todo: FC = () => {
  return (
    <>
      <TodoList />
      <TodoForm />
    </>
  );
};
