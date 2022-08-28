import axios from 'axios';
import { selector } from 'recoil';

export const userInfo = selector({
  key: 'UserInfo',
  get: async ({ get }) => {
    const response = await axios.get<UserType>('https://jsonplaceholder.typicode.com/todos/1');
    return response.data;
  },
});

type UserType = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};
