import { Route, Routes } from 'react-router-dom';
import { useEffect, lazy } from 'react';
import { fetchCourse } from './api/fetchCourse';
import { useAppDispatch, useAppSelector } from './hooks/hooks';
import { Layout } from './conponents/Layout/Layout';
import { Home } from './conponents/Home/Home';
import { GlobalStyle } from './GlobalStyle';

const Converter = lazy(() => import('./conponents/Converter/Converter'));

const App: React.FC = () => {
  const dispatch = useAppDispatch();
  const { currentRate } = useAppSelector(state => state.exchangeRate);

  useEffect(() => {
    dispatch(fetchCourse(currentRate));
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
