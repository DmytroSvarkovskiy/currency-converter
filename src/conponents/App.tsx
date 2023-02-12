import { Route, Routes } from 'react-router-dom';
import { useEffect, lazy } from 'react';
import { fetchCours } from '../Redux/fetchCours';
import { useAppDispatch, useAppSelector } from '../hooks';
import { Layout } from './Layout/Layout';
import { Home } from './pages/Home/Home';
import { GlobalStyle } from '../GlobalStyle';

const Converter = lazy(() => import('./pages/Converter/Converter'));

const App: React.FC = () => {
  const dispatch = useAppDispatch();
  const { currentRate } = useAppSelector(state => state.exchangeRate);

  useEffect(() => {
    dispatch(fetchCours(currentRate));
  }, [currentRate, dispatch]);

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/converter" element={<Converter />} />
        </Route>
      </Routes>
      <GlobalStyle />
    </>
  );
};

export default App;
