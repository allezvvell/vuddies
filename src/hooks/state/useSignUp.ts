import { useState } from 'react';
import { signUp, updateUserInfo, deleteAccount } from '@firebase/firebaseAuth';
import { addUser } from '@firebase/firebaseStore';
import { SignUpFormValues } from '@typings/auth';
import { User } from 'firebase/auth';
import Validate from '@utils/Validate';
import { checkDisplayName } from '@firebase/firebaseStore';
import { uploadImage } from '@firebase/firebaseStorage';
import { signUpFormIds } from '@constants/auth';
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
  error: '닉네임 중복 체크 중 오류가 발생 했습니다.\n다시 시도해주세요.',
} as const;

const useSignUp = () => {
  const [formData, setFormData] = useState(initialData);
  const [formError, setFormError] = useState(initialError);
  const [displayNameCheck, setDisplayNameCheck] = useState(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState('');

  const updateFormError = (key: keyof typeof initialError, value: string) => {
    setFormError((prev) => ({ ...prev, [key]: value }));
  };

  const resetFormData = () => {
    setFormData({ ...initialData });
    setDisplayNameCheck(false);
  };

  const resetError = () => {
    setError('');
  };

  const onChangeInput = (
    e: React.ChangeEvent<HTMLInputElement>,
    id: keyof typeof initialData,
  ) => {
    const value = e.target.value;
    setFormData((prev) => ({ ...prev, [id]: value }));
    const inputError = validate.validateSignUpInput(
      id,
      value,
      id === 'passwordCheck' ? formData.password : undefined,
    );
    updateFormError(id, inputError);

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
      updateFormError('displayName', DISPLAY_NAME_MESSAGE.isEmpty);
      return;
    }

    setIsLoading(true);
    try {
      const exists = await checkDisplayName(formData.displayName);
      if (exists) {
        updateFormError('displayName', DISPLAY_NAME_MESSAGE.isDuplicated);
      } else {
        updateFormError('displayName', '');
        setDisplayNameCheck(true);
      }
    } catch (error) {
      console.error(error);
      updateFormError('displayName', DISPLAY_NAME_MESSAGE.error);
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
      updateFormError('displayName', DISPLAY_NAME_MESSAGE.notChecked);
      return;
    }

    const { email, displayName, password } = formData;

    setIsLoading(true);
    let newUser: User | null = null;
    try {
      const { user } = await signUp(email, password);
      newUser = user;
      await updateUserInfo(displayName);
      await addUser(user.uid, displayName);
      resetFormData();
    } catch (error) {
      console.error(error);

      if (newUser !== null) {
        try {
          await deleteAccount(newUser);
        } catch (error) {
          console.error(error);
        }
      }

      if (error instanceof FirebaseError) {
        setError(
          FIREBASE_AUTH_ERRORS[
            (error.code as keyof typeof FIREBASE_AUTH_ERRORS) ||
              'failed-sign-up'
          ],
        );
      } else {
        setError(FIREBASE_AUTH_ERRORS['failed-sign-up']);
      }
    } finally {
      setIsLoading(false);
    }
  };

  return {
    onSubmitForm,
    formData,
    formError,
    onChangeInput,
    displayNameCheck,
    validateDisplayName,
    isLoading,
    error,
    resetError,
  };
};

export default useSignUp;
