import { useRouter } from 'next/router';
import axios, { AxiosError } from 'axios';
import { useQuery } from '@tanstack/react-query';
import { atom, selector, useRecoilValue, useRecoilValueLoadable } from 'recoil';

type UserType = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

export const useSampleQuery = () => {
  const router = useRouter();
  const getUser = async () => {
    const { data } = await axios.get<UserType>('https://j/10000000');

    return data;
  };

  return useQuery({
    queryKey: ['UserType'],
    queryFn: getUser,
    onError: async (err: AxiosError) => {
      console.log(err);
      if (err.response?.status === 401 || err.response?.status === 403) await router.push('/');
    },
  });
};
