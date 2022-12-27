import { useQuery } from '@tanstack/react-query';
import router from 'next/router';
import { AxiosError } from 'axios';
import { todoListApi, todoStatusApi } from './todoApi';

export const useTodos = () => {
  const useTodoQuery = () => {
    return useQuery({
      queryKey: ['todoList'],
      queryFn: todoListApi,
    });
  };

  const useTodoStatusQuery = () => {
    return useQuery({
      queryKey: ['todoStatus'],
      queryFn: todoStatusApi,
      onError: (err: AxiosError) => {
        if (err.response?.status === 401 || err.response?.status === 403) {
          window.alert(
            'ログイン状態が無効になりました。続けて操作する場合はログインをしなおしてください。'
          );
          router.push('/sign_up');
          return;
        }
        if (err.message === 'Network Error') {
          window.alert(
            '通信がエラー発生しました。電波の良い場所で再度お試しください'
          );
          return;
        }
        window.alert(
          '予期せぬエラーが発生しました。しばらくしてから再度お試しください'
        );
      },
    });
  };

  return {
    useTodoQuery,
    useTodoStatusQuery,
  };
};
