import { useState } from 'react';
import {
  SWrap,
  SLogo,
  STitle,
  SForm,
  SField,
  SSubmitButton,
  SInputMessage,
} from './styles';
import logoImage from '@assets/images/logo.png';
import { signUp, updateUserInfo } from '@firebase/firebaseAuth';
import { addUser } from '@firebase/firebaseStore';
import { SignUpFormValues } from '@typings/auth';
import Validate from '@utils/Validate';
import { checkDisplayName } from '@firebase/firebaseStore';
import { signUpFormFields, signUpFormIds } from '@constants/auth';
import { FIREBASE_AUTH_ERRORS } from '@constants/errors';
import { FirebaseError } from 'firebase/app';

const validate = new Validate();

const initialData = signUpFormIds.reduce((acc, curr) => {
  acc[curr as (typeof signUpFormIds)[number]] = '';
  return acc;
}, {} as SignUpFormValues);

const initialError = { ...initialData };

const DISPLAY_NAME_MESSAGE = {
  isEmpty: '닉네임을 입력해주세요.',
  isDuplicated: '이미 사용 중인 닉네임 입니다.',
  notChecked: '닉네임 중복 여부를 확인해주세요.',
} as const;

const SignUp = () => {
  const [formData, setFormData] = useState(initialData);
  const [formError, setFormError] = useState(initialError);
  const [displayNameCheck, setDisplayNameCheck] = useState(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState('');

  const onChangeInput = (
    e: React.ChangeEvent<HTMLInputElement>,
    id: (typeof signUpFormFields)[number]['id'],
  ) => {
    const value = e.target.value;
    setFormData((prev) => ({ ...prev, [id]: value }));
    const isPasswordCheck = id === 'passwordCheck';
    const inputError = validate.validateSignUpInput(
      id,
      value,
      isPasswordCheck ? formData.password : undefined,
    );
    setFormError((prev) => ({ ...prev, [id]: inputError }));

    if (id === 'displayName') setDisplayNameCheck(false);
  };

  const validateDisplayName = async () => {
    if (
      formError.displayName &&
      formError.displayName !== DISPLAY_NAME_MESSAGE.notChecked
    ) {
      return;
    }

    if (!formData.displayName) {
      setFormError((prev) => ({
        ...prev,
        displayName: DISPLAY_NAME_MESSAGE.isEmpty,
      }));
      return;
    }

    setIsLoading(true);
    try {
      const exists = await checkDisplayName(formData.displayName);
      if (exists) {
        setFormError((prev) => ({
          ...prev,
          displayName: DISPLAY_NAME_MESSAGE.isDuplicated,
        }));
      } else {
        setFormError((prev) => ({
          ...prev,
          displayName: '',
        }));
        setDisplayNameCheck(true);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  const onSubmitForm = async (e: React.FormEvent) => {
    e.preventDefault();

    const errors = validate.validateSignUpForm(formData);
    if (Object.values(errors).some((e) => e.length > 0)) {
      setFormError({ ...errors });
      return;
    }

    if (!displayNameCheck) {
      setFormError((prev) => ({
        ...prev,
        displayName: DISPLAY_NAME_MESSAGE.notChecked,
      }));
      return;
    }

    const { email, displayName, password } = formData;

    setIsLoading(true);
    try {
      const { user } = await signUp(email, password);
      await updateUserInfo(displayName);
      await addUser(user.uid, displayName);
      setFormData({ ...initialData });
      setDisplayNameCheck(false);
    } catch (error) {
      if (error instanceof FirebaseError) {
        const errorCode = error.code as keyof typeof FIREBASE_AUTH_ERRORS;
        const msg =
          FIREBASE_AUTH_ERRORS[errorCode] ||
          '가입에 실패했습니다. 다시 시도해주세요.';
        setError(msg);
      } else {
        setError('가입에 실패했습니다. 다시 시도해주세요.');
      }
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
        <SForm onSubmit={onSubmitForm}>
          {signUpFormFields.map((f) => (
            <SField key={f.id}>
              <label htmlFor={f.id}>{f.label}</label>
              <div>
                <input
                  id={f.id}
                  type={f.type}
                  value={formData[f.id]}
                  onChange={(e) => {
                    onChangeInput(e, f.id);
                  }}
                />
                {f.id === 'displayName' && (
                  <button
                    type="button"
                    disabled={displayNameCheck}
                    onClick={validateDisplayName}
                  >
                    중복체크
                  </button>
                )}
              </div>
              {formError[f.id].length > 0 && (
                <SInputMessage>{formError[f.id]}</SInputMessage>
              )}
              {f.id === 'displayName' && displayNameCheck && (
                <SInputMessage $variant="success">
                  사용 가능한 닉네임 입니다.
                </SInputMessage>
              )}
            </SField>
          ))}
          <SSubmitButton disabled={isLoading}>
            {isLoading ? '...loading' : '가입하기'}
          </SSubmitButton>
        </SForm>
        <div>{error}</div>
      </div>
    </SWrap>
  );
};

export default SignUp;
