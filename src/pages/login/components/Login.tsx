import { FC, useCallback } from 'react';
import { useForm, yupResolver } from '@mantine/form'
import { Button, PasswordInput, TextInput } from '@mantine/core';
import { useLogin } from './features/useLogin';
import { Form, validationSchema } from './features/validation';

// import { useAddTodo } from './useAddTodo';
// import { todoState } from './features/todoAtom';

export type LoginFormTypes = {
  email: string;
  password: string;
};

export const Login: FC = () => {
  const form = useForm<Form>({
    initialValues: {
      email: '',
      password: '',
    },
    validate: yupResolver(validationSchema),
    validateInputOnChange: true,
  });

  const { login, isLoading } = useLogin();

  const handleLogin = useCallback((params: LoginFormTypes) => {
    login({email: params.email, password: params.password});
  }, []);

  if (isLoading) return <>Lodding</>

  return (
    <form onSubmit={form.onSubmit(handleLogin)}>
        <TextInput
          mt="md"
          id="email"
          label="Email*"
          placeholder="example@gmail.com"
          {...form.getInputProps('email')}
        />
        {/* <span>{ errors.email?.message }</span> */}
        <PasswordInput
          mt="md"
          id="password"
          placeholder="password"
          label="Password*"
          description="Must be min 5 char"
          {...form.getInputProps('password')}
        />
          <Button
            color="cyan"
            type="submit"
          >
            Login
          </Button>
      </form>
  );
};
