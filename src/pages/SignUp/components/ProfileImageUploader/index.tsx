import { useRef, useEffect, useState } from 'react';
import styled from 'styled-components';
import mediaQuery from '@components/styles/responsive';
import defaultImage from '@assets/images/user/profile.png';
import { FaCamera } from 'react-icons/fa';
import { SignUpFormIds } from '@typings/auth';

interface Props {
  profileImage: File | null;
  updateProfileImage(imageFile: File | null): void;
  updateFormError(key: SignUpFormIds, value: string): void;
}

const ProfileImageUploader = ({
  profileImage,
  updateProfileImage,
  updateFormError,
}: Props) => {
  const [preview, setPreview] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const onClickButton = () => {
    inputRef.current!.click();
  };

  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    updateProfileImage(file || null);
    if (file) {
      updateFormError('profileImage', '');
    }
  };

  useEffect(() => {
    if (!profileImage) {
      setPreview(null);
      return;
    }

    const imageUrl = URL.createObjectURL(profileImage);
    setPreview(imageUrl);

    return () => URL.revokeObjectURL(imageUrl);
  }, [profileImage]);

  return (
    <>
      <SWrap>
        <img src={preview ? preview : defaultImage} alt="프로필 이미지" />
        <Sbutton onClick={onClickButton}>
          <FaCamera />
        </Sbutton>
      </SWrap>
      <SInputFile
        type="file"
        ref={inputRef}
        accept="image/*"
        onChange={onChangeInput}
      />
    </>
  );
};

export default ProfileImageUploader;

const SWrap = styled.div`
  position: relative;
  width: 160px;
  height: 160px;
  border-radius: 100%;
  border: 1px solid var(--text-color-gray2);
  background-color: var(--bg-color-white);

  ${mediaQuery.mobile} {
    width: 140px;
    height: 140px;
  }

  > img {
    width: 100%;
    height: 100%;
    border-radius: 100%;
    object-fit: cover;
  }
`;

const Sbutton = styled.button`
  position: absolute;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 48px;
  height: 48px;
  background-color: var(--primary-color);
  color: #fff;
  font-size: 20px;
  border-radius: 100%;
`;

const SInputFile = styled.input`
  display: none;
`;
