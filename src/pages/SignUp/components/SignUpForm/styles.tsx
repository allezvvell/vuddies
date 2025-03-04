import styled from 'styled-components';
import { pageTitle } from '@components/styles/mixins';

const SForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 100%;
`;

const SField = styled.div`
  display: flex;
  flex-direction: column;

  > label {
    margin-bottom: 8px;
    font-size: 16px;
  }

  > div {
    display: flex;
    align-items: center;

    input {
      flex: 1;
      padding: 0 16px;
      height: 44px;
      font-size: 16px;
      border: 1px solid var(--text-color-gray2);
      border-radius: 4px;
    }

    button {
      padding: 0 8px;
      margin-left: 8px;
      height: 44px;
      font-size: 12px;
      background-color: var(--btn-color-gray1);
      border-radius: 4px;
    }
  }
`;

const SInputMessage = styled.p<{ $variant?: 'success' }>`
  padding-top: 8px;
  color: ${({ $variant }) =>
    $variant === 'success'
      ? 'var(--text-color-success)'
      : 'var(--text-color-error)'};
  white-space: 'pre-line';
`;

const SSubmitButton = styled.button`
  font-family: var(--bold-font);
  height: 44px;
  font-size: 20px;
  color: #fff;
  background-color: var(--primary-color);
  border-radius: 4px;
`;

export { SForm, SField, SSubmitButton, SInputMessage };
