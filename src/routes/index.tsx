import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router';

const MainLayout = lazy(() => import('@components/layouts/MainLayout'));
const Home = lazy(() => import('@pages/Home'));
const SignIn = lazy(() => import('@pages/SignIn'));
const SignUp = lazy(() => import('@pages/SignUp'));
const MyPage = lazy(() => import('@pages/MyPage'));
const NotFound = lazy(() => import('@pages/NotFound'));

const AppRouter = () => {
  return (
    <Suspense fallback="loading...">
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index={true} element={<Home />} />
          <Route path="signin" element={<SignIn />} />
          <Route path="user/mypage" element={<MyPage />} />
        </Route>
        <Route path="/signup" element={<SignUp />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
};

export default AppRouter;
