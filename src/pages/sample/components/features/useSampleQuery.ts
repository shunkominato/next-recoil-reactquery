import { useRouter } from 'next/router';
import axios from 'axios';
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
    const { data } = await axios.get<UserType>('https://jsonplaceholder.typicode.com/todos/1');

    return data;
  };

  return useQuery({
    queryKey: ['UserType'],
    queryFn: getUser,
    onError: async (err: any) => {
      if (err.response.status === 401 || err.response.status === 403) await router.push('/');
    },
  });
};
