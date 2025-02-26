import Header from '../elements/Header';
import Footer from '../elements/Footer';
import MobileNav from '../elements/MobileNav';
import { Outlet } from 'react-router';

const MainLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
      <MobileNav />
    </>
  );
};

export default MainLayout;
