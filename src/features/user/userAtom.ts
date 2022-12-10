// import { atom } from 'recoil';
import apiClient from '@/lib/apiClient';
import { atom } from 'jotai';

export interface UserState {
  userId: number;
  name: string;
}

export const userState = atom({
  // key: 'user',
  // default: null,
  userId: 0,
  name: 'test',
});
