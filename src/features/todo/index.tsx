import { FC } from 'react';
import { useForm } from 'react-hook-form';

type FormValue = {
  todo: string;
};

export const Todo: FC = () => {
  const { register, handleSubmit } = useForm<FormValue>();
  const onSubmit = (data: FormValue) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register('todo')} />
      <input type="submit" />
    </form>
  );
};
