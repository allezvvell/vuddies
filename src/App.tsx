import { useEffect } from 'react';
import { BrowserRouter } from 'react-router';
import AppRouter from 'routes';
import { addAuthStateListener } from '@firebase/firebaseAuth';
import useUser from '@hooks/redux/useUser';

function App() {
  const { setUser, removeUser } = useUser();

  useEffect(() => {
    const unscribe = addAuthStateListener((user) => {
      if (user) {
        console.log('user 존재', user);
        setUser({
          uid: user.uid,
          displayName: user.displayName,
          photoUrl: user.photoURL,
        });
      } else {
        console.log('user x');
        removeUser();
      }
    });

    return () => unscribe();
  }, []);

  return (
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  );
}

export default App;
