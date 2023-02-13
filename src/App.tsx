import { Route, Routes } from 'react-router-dom';
import { useEffect, lazy } from 'react';
import { fetchCourse } from './api';
import { useAppDispatch, useAppSelector } from './hooks';
import { Home, Layout } from './components';
import { GlobalStyle } from './globalstyle';

const Converter = lazy(() => import('./components'));

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
