import { atom } from 'recoil';
import apiClient from '@/util/apiClient';

export interface TodoState {
  todo: string[];
}

export interface TodoAction {
  todo: string;
}

const initialState: TodoState = {
  todo: [],
};

export const todoState = atom({
  key: 'todo',
  default: [] as string[],
});
