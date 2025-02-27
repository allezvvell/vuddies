import { NavLink, useNavigate } from 'react-router';
import styled from 'styled-components';
import Button from '@components/common/Button';
import ROUTES from '@constants/routes';
import { FaUserCircle, FaRegBell } from 'react-icons/fa';

const UserMenu = () => {
  const navigate = useNavigate();
  const onClickSignUp = () => {
    navigate(ROUTES.signUp);
  };
  const onClickSignIn = () => {
    navigate(ROUTES.signIn);
  };

  return (
    <SUserMenu>
      <Button onClick={onClickSignUp}>회원가입</Button>
      <Button onClick={onClickSignIn} $background="transparent">
        로그인
      </Button>
      {/* <SIconButton>
        <FaRegBell />
      </SIconButton>
      <SIconButton>
        <FaUserCircle />
        <span>MY</span>
      </SIconButton> */}
    </SUserMenu>
  );
};

export default UserMenu;

const SUserMenu = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const SIconButton = styled(NavLink)`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
  padding: 8px;
  font-size: 20px;
  color: var(--text-color-gray1);
  background-color: pink;

  span {
    font-size: 14px;
  }
`;
