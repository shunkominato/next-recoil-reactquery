import { FC, useCallback } from 'react';
import { useForm, zodResolver } from '@mantine/form';
import { Container, PasswordInput, TextInput } from '@mantine/core';
import { Button } from '@/components/button/Button';
import { FormTitle } from '@/components/form/form-title/FormTitle';
import { SignUpFormTypes, validationSchema } from './validation';
import { useSignUp } from './useSignUp';

const buttonStyles = {
  root: {
    marginTop: 48,
    height: 72,
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
  const form = useForm<SignUpFormTypes>({
    initialValues: {
      email: '',
      password: '',
    },
    validate: zodResolver(validationSchema),
    validateInputOnChange: true,
  });

  const { handleSignUp, isLoading, isError } = useSignUp();

  if (isError) {
    // eslint-disable-next-line react/jsx-no-useless-fragment
    return <></>;
  }

  return (
    <Container>
      <div className="text-center">
        <FormTitle label="新規ユーザー登録" />
      </div>
      <form className="mt-6" onSubmit={form.onSubmit(handleSignUp)}>
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
          disabled={!!form.errors.email || !form.values.email}
          loading={isLoading}
        />
      </form>
    </Container>
  );
};
