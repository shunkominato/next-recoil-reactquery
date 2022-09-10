import { useRecoilState } from 'recoil';
import { FC } from 'react';
import { useForm } from 'react-hook-form';
// import { useAddTodo } from './useAddTodo';
import { todoState } from './features/todoAtom';
import { useQueryTasks } from './features/useQueryTasks';

type FormValue = {
  todo: string;
};

export const Todo: FC = () => {
  const { data: tasks, status } = useQueryTasks()
  console.log(tasks?.length);
  const [todo, setText] = useRecoilState(todoState);
  // const { addTodo } = useAddTodo();
  const { register, handleSubmit } = useForm<FormValue>();
  const onSubmit = (data: FormValue) => {
    // await addTodo(data.todo);
    setText([...todo, data.todo]);
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register('todo')} />
        <input type="submit" />
      </form>
      <span>{tasks?.map((task => <span key={task.id}>{task.title}</span>))}</span>
    </>
  );
};
