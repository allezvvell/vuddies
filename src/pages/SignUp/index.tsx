import { SWrap, SLogo, STitle } from './styles';
import logoImage from '@assets/images/logo.png';
import SignUpForm from './components/SignUpForm';
import ProfileImageUploader from './components/ProfileImageUploader';
import Modal from '@components/common/Modal';
import useSignUp from '@hooks/state/useSignUp';
import { SInputMessage } from './components/SignUpForm/styles';

const SignUp = () => {
  const { error, resetError, updateProfileImage, ...signUpProps } = useSignUp();
  const {
    formData: { profileImage },
    formError: { profileImage: profileError },
    updateFormError,
  } = signUpProps;

  return (
    <SWrap>
      <div>
        <SLogo>
          <img src={logoImage} alt="버디즈" />
        </SLogo>
        <STitle>회원가입</STitle>
        <ProfileImageUploader
          {...{ profileImage, updateProfileImage, updateFormError }}
        />
        {profileError && <SInputMessage>{profileError}</SInputMessage>}
        <SignUpForm {...signUpProps} />
        {error && <Modal onClick={resetError}>{error}</Modal>}
      </div>
    </SWrap>
  );
};

export default SignUp;
