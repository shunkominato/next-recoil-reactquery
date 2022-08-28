import React, { VFC } from 'react';

interface Props {
  label: string;
  onClick: () => void;
}
export const Button: VFC<Props> = ({ label, onClick }) => {
  return (
    <button type="submit" onClick={onClick}>
      {label}
    </button>
  );
};
