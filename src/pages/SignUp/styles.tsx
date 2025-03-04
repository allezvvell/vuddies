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

export { SWrap, SLogo, STitle };
