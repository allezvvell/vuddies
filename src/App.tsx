import { lazy } from 'react';
import { BrowserRouter, Routes } from 'react-router';

const Home = lazy(() => import('@pages/Home'));

function App() {
  return (
    <BrowserRouter>
      <Routes></Routes>
    </BrowserRouter>
  );
}

export default App;
