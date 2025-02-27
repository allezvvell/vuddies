import styled from 'styled-components';
import mediaQuery, { BREAK_POINTS } from '@components/styles/responsive';

const SHeader = styled.header`
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 1000;
  padding: 12px;
  height: var(--header-height);
  background-color: var(--bg-color-white);
  /* box-shadow: rgba(33, 37, 41, 0.08) 0px 2px 4px 0px; */

  ${mediaQuery.tablet} {
    height: var(--mobile-header-height);
  }

  > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
    max-width: ${BREAK_POINTS.desktop};
    height: 100%;
  }
`;

const SNavBar = styled.nav`
  display: flex;
  align-items: center;
  gap: 12px;
`;

const SLogo = styled.h1`
  width: 172px;
  transition: width 300ms;

  ${mediaQuery.tablet} {
    width: 120px;
  }
`;

const SMainMenu = styled.div`
  display: flex;
  align-items: center;

  ${mediaQuery.tablet} {
    display: none;
  }

  > a {
    padding: 2px;
    margin: 0 4px;
    font-size: 16px;
    transition: all 100ms;

    &:hover {
      color: var(--primary-color);
    }
  }
`;

export { SHeader, SNavBar, SLogo, SMainMenu };
