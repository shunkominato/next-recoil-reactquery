import { useRouter } from 'next/router';
import { AxiosError } from 'axios';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useRecoilState } from 'recoil';
import apiClient from '@/lib/apiClient';
import { userState } from '@/features/user/userAtom';
import { useMutationClient } from '@/lib/useFetchClient';
import { useCallback } from 'react';
// import { LoginFormTypes } from './SignUp';
import { SignUpFormTypes } from './validation';
import { signUpApi, SignUpApiType, ISignUpApi } from './signupApi';

export const useSignUp = () => {
  const queryClient = useQueryClient();
  // const [user, setUser] = useRecoilState();
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

    // return data;
    await router.push('/todo');
  };

  const { mutate, isLoading, isError } = useMutationClient<
    SignUpApiType,
    ISignUpApi,
    []
  >(signUpApi);

  const signUp = ({ email, password }: { email: string; password: string }) => {
    mutate(
      {
        email,
        password,
      },
      {
        onSuccess: onSuccessLogin,
        onError: () => {
          window.alert('kkk');
        },
      }
    );
  };

  const handleSignUp = useCallback((params: SignUpFormTypes) => {
    signUp({ email: params.email, password: params.password });
  }, []);

  return { handleSignUp, isLoading, isError };
};
