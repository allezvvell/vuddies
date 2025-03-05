import { storage } from '.';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';

export const uploadImage = async (imageFile: File) => {
  const imageRef = ref(storage, `images/${imageFile.name}`);

  await uploadBytes(imageRef, imageFile);
  const url = await getDownloadURL(imageRef);

  return url;
};
