import { useSelector, useDispatch } from 'react-redux';
import { AppDispatch, RootState } from '@store/index';
import { signIn, signOut } from '@store/slices/userSlice';
import { User } from '@typings/user';

const useUser = () => {
  const { user } = useSelector((state: RootState) => state.user);
  const dispatch: AppDispatch = useDispatch();

  const setUser = (user: User) => {
    dispatch(signIn(user));
  };

  const removeUser = () => {
    dispatch(signOut());
  };

  return { user, setUser, removeUser };
};

export default useUser;
