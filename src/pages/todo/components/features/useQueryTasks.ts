import { useRouter } from 'next/router';
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import { atom, selector, useRecoilValue, useRecoilValueLoadable } from 'recoil';

export type Task = {
  id: number;
  createdAt: Date;
  updatedAt: Date;
  title: string;
  description: string | null;
  userId: number;
};

const getTasks = async () => {
  const { data } = await axios.get<Task[]>('/todo');

  return data;
};

export const useQueryTasks = () => {
  const router = useRouter();

  return useQuery({
    queryKey: ['task'],
    queryFn: getTasks,
    onError: (err: any) => {
      if (err.response.status === 401 || err.response.status === 403) router.push('/');
    },
  });
};

// export const todo = atom<Task[]>({
//   key: 'todo',
//   default: selector({
//     key: 'todoFetch',
//     get: async ({ get }) => {
//       const response = await axios.get<Task[]>(
//         `${process.env.NEXT_PUBLIC_API_URL}/todo`
//       )
//       return response.data
//     },
//   }),
// })

// const todoListSelector = selector({
//   key: 'todoListSelector',
//   get: ({ get }) => get(todo),
// })

// export const useQueryTasks = () => {
//   const res = useRecoilValue(todoListSelector)
//   return res
// }
