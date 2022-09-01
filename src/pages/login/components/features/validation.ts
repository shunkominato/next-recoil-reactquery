import * as yup from 'yup';
import { LoginFormTypes } from '../Login';

export const validationSchema = yup.object({
  email: yup.string().required('入力必須項目です。').email('入力されたメールアドレスに間違いがあります。'),
  password: yup.string().required('入力必須項目です。'),
});

export type Form = yup.InferType<typeof validationSchema>;
