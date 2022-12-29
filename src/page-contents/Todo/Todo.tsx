import { FC } from 'react';
import { TodoForm } from './todoForm/TodoForm';
import { TodoList } from './todoList/TodoList';

export const Todo: FC = () => {
  return (
    <>
      <TodoList />
      <TodoForm />
    </>
  );
};
