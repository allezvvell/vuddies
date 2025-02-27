import { ReactNode } from 'react';
import { SButton } from './styles';

export interface ButtonProps {
  children: ReactNode;
  onClick(): void;
  $variant?: 'square';
  $fontSize?: 'large';
  $fontWeight?: 'bold';
  $background?: 'secondary' | 'accent' | 'transparent';
}

const Button = ({
  children,
  onClick,
  $variant,
  $fontSize,
  $fontWeight,
  $background,
}: ButtonProps) => {
  return (
    <SButton
      onClick={onClick}
      $variant={$variant}
      $fontSize={$fontSize}
      $fontWeight={$fontWeight}
      $background={$background}
    >
      {children}
    </SButton>
  );
};

export default Button;
