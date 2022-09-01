import { atom } from 'recoil';
import apiClient from '@/util/apiClient';

export interface UserState {
  userId: number;
  name: string;
}

export const userState = atom<UserState | null>({
  key: 'user',
  default: null,
});
