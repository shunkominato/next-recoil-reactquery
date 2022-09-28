import { FC, useCallback } from 'react';
import { useForm, zodResolver } from '@mantine/form';
import { useMediaQuery } from '@mantine/hooks';
import {
  Container,
  createStyles,
  CSSObject,
  PasswordInput,
  TextInput,
} from '@mantine/core';
import { Button } from '@/components/button/Button';
import { FormTitle } from '@/components/form/form-title/FormTitle';
import { FormDescription } from '@/components/form/form-description/FormDescription';
// import { TextInput } from '@/components/form/TextInput/TextInput';
import { useLogin } from './features/useLogin';
import { Form, validationSchema } from './features/validation';

// import { useAddTodo } from './useAddTodo';
// import { todoState } from './features/todoAtom';

export type LoginFormTypes = {
  email: string;
  password: string;
};

const buttonStyles = {
  root: {
    marginTop: 24,
  },
};

const inputStyles = {
  input: {
    height: 56,
  },
  innerInput: {
    height: 56,
  },
};

export const SignUp: FC = () => {
  const isMobile = useMediaQuery('(min-width: 500px)');
  const form = useForm<Form>({
    initialValues: {
      email: '',
      password: '',
    },
    validate: zodResolver(validationSchema),
    validateInputOnChange: true,
  });

  const { login, isLoading } = useLogin();

  const handleLogin = useCallback((params: LoginFormTypes) => {
    login({ email: params.email, password: params.password });
  }, []);

  if (isLoading) return <>Lodding</>;

  return (
    <Container>
      <div className="text-center">
        <FormTitle label="新規登録" />
      </div>
      <form className="mt-6" onSubmit={form.onSubmit(handleLogin)}>
        <TextInput
          mt="md"
          id="email"
          label="メールアドレスを入力してください（半角）*"
          placeholder="example@gmail.com"
          radius="xs"
          styles={inputStyles}
          {...form.getInputProps('email')}
          // form={form}
        />
        {/* <span>{ errors.email?.message }</span> */}
        <PasswordInput
          mt="md"
          id="password"
          placeholder="password"
          label="Password*"
          radius="xs"
          styles={inputStyles}
          {...form.getInputProps('password')}
        />
        <Button
          type="submit"
          label="登録"
          size="xl"
          fullWidth
          styles={buttonStyles}
        />
        {isMobile ? (
          <Button
            type="submit"
            label="登録"
            size="xl"
            fullWidth
            styles={buttonStyles}
          />
        ) : null}
      </form>
    </Container>
  );
};
