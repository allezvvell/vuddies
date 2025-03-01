import { SWrap, SLogo, STitle, SForm, SField, SSubmitButton } from './styles';
import logoImage from '@assets/images/logo.png';

const fields = [
  { id: 'email', label: '이메일', type: 'email' },
  { id: 'displayName', label: '닉네임', type: 'text' },
  { id: 'password', label: '비밀번호', type: 'password' },
  { id: 'passwordCheck', label: '비밀번호 확인', type: 'password' },
] as const;

const SignUp = () => {
  const onSubmitForm = () => {};
  return (
    <SWrap>
      <div>
        <SLogo>
          <img src={logoImage} alt="버디즈" />
        </SLogo>
        <STitle>회원가입</STitle>
        <SForm>
          {fields.map((f) => (
            <SField key={f.id}>
              <label htmlFor={f.id}>{f.label}</label>
              <div>
                <input type={f.type} />
                {f.id === 'displayName' && <button>중복체크</button>}
              </div>
            </SField>
          ))}
          <SSubmitButton onClick={onSubmitForm}>가입하기</SSubmitButton>
        </SForm>
      </div>
    </SWrap>
  );
};

export default SignUp;
