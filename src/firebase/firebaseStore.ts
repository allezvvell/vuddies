import { db } from '.';
import { doc, setDoc } from '@firebase/firestore';

export const addUser = (
  uid: string,
  displayName: string,
  photoUrl?: string,
) => {
  return setDoc(doc(db, 'users', uid), {
    uid,
    displayName,
    ...(photoUrl ? { photoUrl } : {}),
  });
};
