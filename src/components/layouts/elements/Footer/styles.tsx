import styled from 'styled-components';
import mediaQuery from '@components/styles/responsive';

const SFooter = styled.footer`
  height: var(--footer-height);

  ${mediaQuery.tablet} {
    height: var(--mobile-footer-height);
  }
`;

export { SFooter };
