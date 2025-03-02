import { db } from '.';
import {
  doc,
  getDoc,
  serverTimestamp,
  runTransaction,
} from '@firebase/firestore';

export const addUser = async (
  uid: string,
  displayName: string,
  photoUrl?: string,
) => {
  await runTransaction(db, async (transaction) => {
    const userRef = doc(db, 'users', uid);
    const displayNameRef = doc(db, 'displayNames', displayName);
    const timestamp = serverTimestamp();
    transaction.set(userRef, {
      uid,
      displayName,
      createdAt: timestamp,
      ...(photoUrl ? { photoUrl } : {}),
    });
    transaction.set(displayNameRef, {
      createdAt: timestamp,
    });
  });
};

export const checkDisplayName = async (displayName: string) => {
  const docRef = doc(db, 'displayNames', displayName);
  const docSnap = await getDoc(docRef);
  return docSnap.exists();
};
