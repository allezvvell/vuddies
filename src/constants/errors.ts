export const FIREBASE_AUTH_ERRORS = {
  'auth/email-already-in-use': '이미 사용 중인 이메일입니다.',
  'auth/invalid-email': '유효하지 않은 이메일 형식입니다.',
  'auth/weak-password': '비밀번호는 6자 이상이어야 합니다.',
  'auth/user-not-found': '해당 이메일로 가입된 계정을 찾을 수 없습니다.',
  'auth/wrong-password': '비밀번호가 일치하지 않습니다.',
  'auth/too-many-requests':
    '너무 많은 요청을 시도했습니다. 잠시 후 다시 시도해주세요.',
  'auth/network-request-failed': '네트워크 연결이 원활하지 않습니다.',
  'auth/internal-error': '서버 오류가 발생했습니다. 잠시 후 다시 시도해주세요.',
  'failed-sign-up': '가입에 실패했습니다. 다시 시도해주세요.',
} as const;
