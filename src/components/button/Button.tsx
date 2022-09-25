import React, { FC } from 'react';
import { Button as MButton, CSSObject } from '@mantine/core';

interface Props {
  label: string;
  variant?: 'light' | 'outline' | 'default' | 'subtle';
  color?: string;
  radius?: 'xs' | 'md' | 'lg' | 'xl';
  fullWidth?: boolean;
  size?: 'xs' | 'md' | 'lg' | 'xl';
  type?: 'reset' | 'button' | 'submit';
  styles?: Record<'root', string | CSSObject>;
  onClick?: () => void;
}
export const Button: FC<Props> = ({
  label,
  variant,
  color,
  radius,
  fullWidth = false,
  onClick,
  size,
  type = 'submit',
  styles,
}) => {
  return (
    <MButton
      type={type}
      variant={variant}
      color={color}
      radius={radius}
      fullWidth={fullWidth}
      size={size}
      onClick={onClick}
      styles={styles as Record<'root', CSSObject>}
    >
      {label}
    </MButton>
  );
};
