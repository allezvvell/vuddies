import { useState } from 'react';
import { SWrap, SLogo, STitle, SForm, SField, SSubmitButton } from './styles';
import logoImage from '@assets/images/logo.png';
import { signUp, updateUserInfo } from '@firebase/firebaseAuth';
import { addUser } from '@firebase/firebaseStore';

const fields = [
  { id: 'email', label: '이메일', type: 'email' },
  { id: 'displayName', label: '닉네임', type: 'text' },
  { id: 'password', label: '비밀번호', type: 'password' },
  { id: 'passwordCheck', label: '비밀번호 확인', type: 'password' },
] as const;

const initialFormData = Object.fromEntries(
  fields.map(({ id }) => [id, '']),
) as Record<(typeof fields)[number]['id'], string>;

const SignUp = () => {
  const [formData, setFormData] = useState(initialFormData);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const onChangeInput = (
    e: React.ChangeEvent<HTMLInputElement>,
    id: (typeof fields)[number]['id'],
  ) => {
    setFormData((prev) => ({ ...prev, [id]: e.target.value }));
  };

  const onSubmitForm = async () => {
    if (Object.values(formData).some((v) => v.trim().length === 0)) return;

    const { email, displayName, password } = formData;

    setIsLoading(true);

    try {
      const { user } = await signUp(email, password);
      await updateUserInfo(displayName);
      await addUser(user.uid, displayName);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

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
                <input
                  type={f.type}
                  value={formData[f.id]}
                  onChange={(e) => {
                    onChangeInput(e, f.id);
                  }}
                />
                {f.id === 'displayName' && <button>중복체크</button>}
              </div>
            </SField>
          ))}
          <SSubmitButton onClick={onSubmitForm} disabled={isLoading}>
            {isLoading ? '...loading' : '가입하기'}
          </SSubmitButton>
        </SForm>
      </div>
    </SWrap>
  );
};

export default SignUp;
