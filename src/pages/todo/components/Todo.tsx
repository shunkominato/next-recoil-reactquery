import { useRecoilState } from 'recoil';
import { FC } from 'react';
import { useForm } from 'react-hook-form';
// import { useAddTodo } from './useAddTodo';
import { todoState } from './features/todoAtom';


type FormValue = {
  todo: string;
};

export const Todo: FC = () => {
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
      <span>{todo}</span>
    </>
  );
};
