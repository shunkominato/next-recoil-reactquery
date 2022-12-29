import { useQuery } from '@tanstack/react-query';
import { todoListApi } from './todoListApi';

export const useFetchTodos = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ['todoList'],
    queryFn: todoListApi,
  });

  return {
    todoList: data?.todoList,
    isLoading,
    isError,
  };
};
