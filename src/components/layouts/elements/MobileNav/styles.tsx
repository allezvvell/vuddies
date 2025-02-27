import { NavLink } from 'react-router';
import styled from 'styled-components';
import mediaQuery from '@components/styles/responsive';

const SNav = styled.div`
  display: none;
  background-color: var(--bg-color-white);
  box-shadow: rgba(33, 37, 41, 0.08) 0px -2px 4px 0px;

  ${mediaQuery.tablet} {
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    height: var(--mobile-nav-height);
  }
`;

const SLink = styled(NavLink)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 4px;
  height: 52px;
  width: 56px;
  font-size: 12px;
  color: var(--text-color-gray1);
  border-radius: 4px;

  &.active {
    color: var(--text-color-default);
  }

  > svg {
    font-size: 24px;
  }
`;

export { SNav, SLink };
