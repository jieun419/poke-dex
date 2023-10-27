import { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/header/Header';
import Loading from './pages/loading/Loading';

const Main = lazy(() => import('./pages/main/Main'));
const PokemonDetail = lazy(() => import('./pages/detail/PokemonDetail'));

function App() {
  return (
    <Router>
      <Suspense fallback={<Loading />}>
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/detail/id" element={<PokemonDetail />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
