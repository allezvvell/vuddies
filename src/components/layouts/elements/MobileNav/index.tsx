import { SNav, SLink } from './styles';
import ROUTES from '@constants/routes';
import {
  FiHome,
  FiSearch,
  FiList,
  FiMessageSquare,
  FiUsers,
} from 'react-icons/fi';

const MOBILE_MENU = [
  { name: '홈', icon: <FiHome />, path: ROUTES.home },
  { name: '모임', icon: <FiSearch />, path: ROUTES.meetups },
  { name: '봉사활동', icon: <FiList />, path: ROUTES.volunteers },
  { name: '모임후기', icon: <FiUsers />, path: ROUTES.reviews },
  { name: '채팅', icon: <FiMessageSquare />, path: ROUTES.chats },
] as const;

const MobileNav = () => {
  return (
    <SNav>
      {MOBILE_MENU.map((m) => (
        <SLink key={m.name} to={m.path}>
          {m.icon}
          {m.name}
        </SLink>
      ))}
    </SNav>
  );
};

export default MobileNav;
