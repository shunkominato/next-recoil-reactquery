import React, { FC, memo } from 'react';
import { TextInput as MTTextInput } from '@mantine/core';

interface Props {
  mt: string;
  id: string;
  label: string;
  placeholder: string;
  form: any;
}
// eslint-disable-next-line react/display-name
export const TextInput: FC<Props> = memo(({ mt, id, label, placeholder }) => {
  return (
    <MTTextInput
      mt={mt}
      id={id}
      label={label}
      placeholder={placeholder}
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
      // {...form.getInputProps('email')}
    />
  );
});
