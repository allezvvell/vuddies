import { Link, NavLink } from 'react-router';
import { SHeader, SNavBar, SLogo, SMainMenu } from './styles';
import UserMenu from './UserMenu';
import logoImage from '@assets/images/logo.png';
import ROUTES from '@constants/routes';

const MAIN_MENU = [
  { name: '모임 찾기', path: ROUTES.meetups },
  { name: '봉사활동 검색', path: ROUTES.volunteers },
  { name: '모임 후기', path: ROUTES.reviews },
] as const;

const Header = () => {
  return (
    <SHeader>
      <div>
        <SNavBar>
          <SLogo>
            <Link to={ROUTES.home}>
              <img src={logoImage} alt="버디즈" />
            </Link>
          </SLogo>
          <SMainMenu>
            {MAIN_MENU.map((m) => (
              <NavLink to={m.path} key={m.name}>
                {m.name}
              </NavLink>
            ))}
          </SMainMenu>
        </SNavBar>
        <UserMenu />
      </div>
    </SHeader>
  );
};

export default Header;
