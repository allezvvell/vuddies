import styled from 'styled-components';
import { ButtonProps } from '.';

const fontSizeMap = {
  default: '14px',
  medium: '16px',
  large: '20px',
} as const;

const fontWeightMap = {
  default: 'var(--default-font)',
  bold: 'var(--bold-font)',
} as const;

const backgroundMap = {
  default: 'var(--primary-color)',
  secondary: 'var(--secondary-color)',
  accent: 'var(--accent-color)',
  transparent: 'transparent',
} as const;

const colorMap = {
  default: '#fff',
  secondary: '#fff',
  accent: '#fff',
  transparent: 'var(--text-color-gray1)',
} as const;

const borderColorMap = {
  default: 'var(--primary-color)',
  secondary: 'var(--secondary-color)',
  accent: 'var(--accent-color)',
  transparent: 'var(--text-color-gray1)',
} as const;

const borderMap = {
  default: '4px',
  round: '9999px',
  none: '0px',
} as const;

const SButton = styled.button<Omit<ButtonProps, 'children' | 'onClick'>>`
  overflow: hidden;
  position: relative;
  padding: 8px 12px;
  font-size: ${({ $fontSize }) => fontSizeMap[$fontSize || 'default']};
  font-family: ${({ $fontWeight }) => fontWeightMap[$fontWeight || 'default']};
  color: ${({ $background }) => colorMap[$background || 'default']};
  background-color: ${({ $background }) =>
    backgroundMap[$background || 'default']};
  border-radius: ${({ $border }) => borderMap[$border || 'default']};
  border-width: 1px;
  border-style: solid;
  border-color: ${({ $background }) =>
    borderColorMap[$background || 'default']};

  &:hover::after {
    content: '';
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    background-color: rgba(125, 125, 125, 0.1);
  }
`;

export { SButton };
