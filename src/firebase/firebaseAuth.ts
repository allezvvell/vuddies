import { auth } from '.';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  User,
  updateProfile,
  deleteUser,
} from 'firebase/auth';

export const signUp = (email: string, password: string) => {
  return createUserWithEmailAndPassword(auth, email, password);
};

export const deleteAccount = (user: User) => {
  return deleteUser(user);
};

export const updateUserInfo = (displayName: string, photoURL?: string) => {
  if (auth.currentUser) {
    return updateProfile(auth.currentUser, {
      displayName,
      ...(photoURL ? { photoURL } : {}),
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
