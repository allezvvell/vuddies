import { ReactNode } from 'react';
import { SButton } from './styles';

export interface ButtonProps {
  children: ReactNode;
  onClick(): void;
  $border?: 'round' | 'none';
  $fontSize?: 'large' | 'medium';
  $fontWeight?: 'bold';
  $background?: 'secondary' | 'accent' | 'transparent';
}

const Button = ({
  children,
  onClick,
  $border,
  $fontSize,
  $fontWeight,
  $background,
}: ButtonProps) => {
  return (
    <SButton
      onClick={onClick}
      $border={$border}
      $fontSize={$fontSize}
      $fontWeight={$fontWeight}
      $background={$background}
    >
      {children}
    </SButton>
  );
};

export default Button;
