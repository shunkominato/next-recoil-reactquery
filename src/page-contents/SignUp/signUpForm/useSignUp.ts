import { useRouter } from 'next/router';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useCallback } from 'react';
import { SignUpFormTypes } from './validation';
import { signUpApi, SignUpApiType, ISignUpApi } from './signupApi';

export const useSignUp = () => {
  const queryClient = useQueryClient();
  const router = useRouter();
  const onSuccessLogin = async (
    data: ISignUpApi | void,
    variables: SignUpApiType,
    context: []
  ) => {
    console.log({ data });
    console.log({ variables });
    console.log({ context });
    queryClient.setQueriesData(['user'], data);

    await router.push('/todo');
  };

  const { mutate, isLoading, isError } = useMutation(signUpApi, {
    onSuccess: async (data) => {
      queryClient.setQueriesData(['user'], data);

      await router.push('/todo');
    },
    onError: () => {
      window.alert('kkk');
    },
  });

  const handleSignUp = useCallback((signUpFormValue: SignUpFormTypes) => {
    mutate({
      email: signUpFormValue.email,
      password: signUpFormValue.password,
    });
  }, []);

  return { handleSignUp, isLoading, isError };
};
