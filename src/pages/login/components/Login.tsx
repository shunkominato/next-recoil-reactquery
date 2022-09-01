import { FC, useCallback } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useLogin } from './features/useLogin';
import { Form, validationSchema } from './features/validation';
// import { useAddTodo } from './useAddTodo';
// import { todoState } from './features/todoAtom';

export type LoginFormTypes = {
  email: string;
  password: string;
};

export const Login: FC = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<Form>({
    defaultValues: {
      email: '',
      password: '',
    },
    criteriaMode: 'all',
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call
    resolver: yupResolver(validationSchema),
  });

  const { login, isLoading } = useLogin();

  const handleLogin = useCallback((params: LoginFormTypes) => {
    login({email: params.email, password: params.password});
  }, []);

  if (isLoading) return <>Lodding</>

  return (
    <form onSubmit={handleSubmit(handleLogin)}>
        <input {...register('email') } />
        <span>{ errors.email?.message }</span>
        <input {...register('password') } />
        <input type="submit" />
      </form>
  );
};
