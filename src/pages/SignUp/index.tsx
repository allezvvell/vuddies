import { SWrap, SLogo, STitle } from './styles';
import logoImage from '@assets/images/logo.png';
import SignUpForm from './components/SignUpForm';
import Modal from '@components/common/Modal';
import useSignUp from '@hooks/state/useSignUp';

const SignUp = () => {
  const { error, resetError, ...signUpProps } = useSignUp();

  return (
    <SWrap>
      <div>
        <SLogo>
          <img src={logoImage} alt="버디즈" />
        </SLogo>
        <STitle>회원가입</STitle>
        <SignUpForm {...signUpProps} />
        {error && <Modal onClick={resetError}>{error}</Modal>}
      </div>
    </SWrap>
  );
};

export default SignUp;
