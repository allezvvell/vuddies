import { lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router';

const Home = lazy(() => import('@pages/Home'));

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
