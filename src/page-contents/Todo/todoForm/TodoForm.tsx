import { Button } from '@/components/button/Button';
import { Alert, Radio, Table, TextInput } from '@mantine/core';
import { useForm, zodResolver } from '@mantine/form';
import { FC } from 'react';
import { inputStyles } from './style';
import { useAddTodos } from './useAddTodo';
import { TodoFormTypes, validationSchema } from './validation';

export const TodoForm: FC = () => {
  const form = useForm<TodoFormTypes>({
    initialValues: {
      todo: '',
    },
    validate: zodResolver(validationSchema),
    validateInputOnChange: true,
  });
  const { useAddTodo, isLoading, isError } = useAddTodos();
  console.log(isError);

  return (
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
      <Button
        type="submit"
        label="追加"
        size="xl"
        fullWidth
        // styles={buttonStyles}
        disabled={!!form.errors.todo || !form.values.todo}
        loading={isLoading}
      />
    </form>
  );
};
