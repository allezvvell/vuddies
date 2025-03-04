import { memo } from 'react';
import { SForm, SField, SSubmitButton, SInputMessage } from './styles';
import { signUpFormFields } from '@constants/auth';
import { SignUpFormValues } from '@typings/auth';

interface Props {
  formData: SignUpFormValues;
  formError: SignUpFormValues;
  onSubmitForm(e: React.FormEvent): void;
  onChangeInput(
    e: React.ChangeEvent<HTMLInputElement>,
    id: keyof SignUpFormValues,
  ): void;
  validateDisplayName(): void;
  displayNameCheck: boolean;
  isLoading: boolean;
}

const SignUpForm = ({
  onSubmitForm,
  formData,
  formError,
  onChangeInput,
  displayNameCheck,
  validateDisplayName,
  isLoading,
}: Props) => {
  return (
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
  );
};

export default memo(SignUpForm);
