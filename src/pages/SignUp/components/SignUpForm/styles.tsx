import styled from 'styled-components';

const SForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 28px;
  padding-top: 28px;
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
      min-width: 0;
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
      color: #fff;
      background-color: var(--accent-color);
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
