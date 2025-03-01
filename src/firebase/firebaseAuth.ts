import { auth } from '.';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  User,
  updateProfile,
} from 'firebase/auth';

export const signUp = (email: string, password: string) => {
  return createUserWithEmailAndPassword(auth, email, password);
};

export const updateUserInfo = (displayName: string, photoUrl?: string) => {
  if (auth.currentUser) {
    return updateProfile(auth.currentUser, {
      displayName,
      ...(photoUrl ? { photoUrl } : {}),
    });
  }
};

export const signIn = (email: string, password: string) => {
  return signInWithEmailAndPassword(auth, email, password);
};

export const logOut = () => signOut(auth);

export const addAuthStateListener = (callback: (user: User | null) => void) => {
  return onAuthStateChanged(auth, callback);
};
