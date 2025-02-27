import { Outlet } from 'react-router';
import styled from 'styled-components';
import Header from '../elements/Header';
import Footer from '../elements/Footer';
import MobileNav from '../elements/MobileNav';
import mediaQuery from '@components/styles/responsive';

const MainLayout = () => {
  return (
    <>
      <Header />
      <SMain>
        <Outlet />
      </SMain>
      <Footer />
      <MobileNav />
    </>
  );
};

export default MainLayout;

const SMain = styled.main`
  padding-top: var(--header-height);
  min-height: calc(100vh - var(--footer-height));
  transition: var(--transition-default);

  ${mediaQuery.tablet} {
    padding-top: var(--mobile-header-height);
    min-height: calc(100vh - var(--mobile-footer-height));
  }
`;
