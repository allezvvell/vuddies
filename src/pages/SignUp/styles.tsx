import { Link } from 'react-router';
import styled from 'styled-components';
import mediaQuery, { BREAK_POINTS } from '@components/styles/responsive';
import { pageTitle } from '@components/styles/mixins';

const SWrap = styled.div`
  padding: 32px 0;
  min-height: 100vh;
  background-color: var(--bg-color-ivory);

  > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 auto;
    padding: 32px 16px;
    max-width: ${BREAK_POINTS.mobile};
    border-radius: 8px;
    background-color: #fff;

    ${mediaQuery.tablet} {
      max-width: none;
    }
  }
`;

const SLogo = styled(Link)`
  margin-bottom: 8px;
  width: 68px;
`;

const STitle = styled.h2`
  ${pageTitle}
  margin-bottom: 24px;
`;

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
`;

const SSubmitButton = styled.button`
  font-family: var(--bold-font);
  height: 44px;
  font-size: 20px;
  color: #fff;
  background-color: var(--primary-color);
  border-radius: 4px;
`;

export { SWrap, SLogo, STitle, SForm, SField, SSubmitButton, SInputMessage };
