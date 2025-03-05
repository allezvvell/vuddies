export const signUpFormFields = [
  { id: 'profileImage', label: '프로필 이미지' },
  { id: 'email', label: '이메일', type: 'email' },
  { id: 'displayName', label: '닉네임', type: 'text' },
  { id: 'password', label: '비밀번호', type: 'password' },
  { id: 'passwordCheck', label: '비밀번호 확인', type: 'password' },
] as const;

export const signUpFormIds = signUpFormFields.map((f) => f.id);
