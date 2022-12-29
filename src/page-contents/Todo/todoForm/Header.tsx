import { FC, memo } from 'react';

type Props = {
  title: string;
};

export const Header: FC<Props> = memo(({ title }) => {
  console.log('jjjjjjjj');
  return <h2>{title}</h2>;
});
