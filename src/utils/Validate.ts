import { SignUpFormValues } from '../typings/auth';
import { signUpFormIds } from '@constants/auth';

class Validate {
  #email = (email: string) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return !regex.test(email) ? '이메일 형식을 지켜주세요' : '';
  };

  #password = (password: string): string => {
    const regex = /^(?=.*[a-z])(?=.*\d)[a-z\d!@#$%^&*]{6,20}$/;
    return !regex.test(password)
      ? '비밀번호는 6~20자, 영문 소문자와 숫자를 포함해야 합니다.'
      : '';
  };

  #passwordCheck = (password: string, passwordCheck: string): string => {
    const isMatched = password === passwordCheck;
    return !isMatched ? '비밀번호가 다릅니다.' : '';
  };

  #displayName = (displayName: string): string => {
    const regex = /^[가-힣a-zA-Z0-9]{3,8}$/;
    return !regex.test(displayName)
      ? '닉네임은 3~8자, 한글/영문 소문자/숫자만 가능합니다.'
      : '';
  };

  #validatorMap = (
    name: keyof SignUpFormValues,
    password: string | undefined,
  ) => {
    const validator = {
      email: this.#email,
      password: this.#password,
      passwordCheck: (v: string) => this.#passwordCheck(password!, v),
      displayName: this.#displayName,
    };

    return validator[name];
  };

  validateSignUpInput = (
    name: keyof SignUpFormValues,
    value: string,
    password: string | undefined,
  ) => {
    const validator = this.#validatorMap(name, password);
    return validator(value);
  };

  validateSignUpForm = (formData: SignUpFormValues) => {
    const errors = signUpFormIds.reduce((acc, curr) => {
      acc[curr] = '';
      return acc;
    }, {} as SignUpFormValues);

    for (let k in formData) {
      const typedK = k as keyof SignUpFormValues;
      const errorMessage = this.validateSignUpInput(
        typedK,
        formData[typedK],
        formData['password'],
      );

      if (errorMessage.length > 0) {
        errors[typedK] = errorMessage;
      }
    }
    return errors;
  };
}

export default Validate;
