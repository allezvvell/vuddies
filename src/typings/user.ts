export interface User {
  uid: string;
  displayName: string | null;
  photoUrl: string | null;
}

export type AppUser = Pick<User, 'uid' | 'displayName' | 'photoUrl'>;
