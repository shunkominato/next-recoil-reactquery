import { Radio, Table, TextInput } from '@mantine/core';
import { useForm, zodResolver } from '@mantine/form';
import { FC } from 'react';
import { inputStyles } from './style';
import { useTodos } from './useTodo';
import { TodoFormTypes, validationSchema } from './validation';

export const Todo: FC = () => {
  const form = useForm<TodoFormTypes>({
    initialValues: {
      todo: '',
    },
    validate: zodResolver(validationSchema),
    validateInputOnChange: true,
  });
  const { useTodoQuery, useTodoStatusQuery, useAddTodo } = useTodos();
  const { data } = useTodoQuery();
  const { data: todoStatus, isLoading } = useTodoStatusQuery();

  if (isLoading) {
    return <>loading</>;
  }

  return (
    <>
      <h1>TodoList</h1>
      <Radio.Group name="status">
        {todoStatus?.todoStatus?.map((status) => (
          <Radio key={status.id} value={status.id} label={status.status} />
        ))}
      </Radio.Group>
      <Table>
        <thead>
          <tr>
            <th>id</th>
            <th>todo</th>
            <th>status</th>
          </tr>
        </thead>
        <tbody>
          {data?.todoList?.map((todo) => (
            <tr key={todo.id}>
              <td>{todo.id}</td>
              <td>{todo.todo}</td>
              <td>{todo.status}</td>
            </tr>
          ))}
        </tbody>
      </Table>
      <h2>Todo追加</h2>
      <form className="mt-6" onSubmit={form.onSubmit(useAddTodo)}>
        <div>
          <TextInput
            mt="md"
            id="todo"
            label="todo *"
            radius="xs"
            styles={inputStyles}
            {...form.getInputProps('todo')}
          />
        </div>
      </form>
    </>
  );
};
