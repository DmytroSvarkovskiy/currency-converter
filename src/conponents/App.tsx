import { createGlobalStyle } from 'styled-components';
import { Route, Routes } from 'react-router-dom';
import { useEffect, lazy } from 'react';
import { fetchCours } from '../Redux/operations';
import { useAppDispatch, useAppSelector } from '../hooks';
import { Layout } from './Layout/Layout';
import { Home } from './pages/Home/Home';

const GlobalStyle = createGlobalStyle`

  ul,h1,h2,h3,h4,h5,h6,li,p{list-style:none;margin:0;padding:0;};
  body{

    background: linear-gradient(90deg,#faf0cd, #f1dcd4);
   color: '#010101'; 
  }
a{text-decoration:none;
color:inherit}
`;
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
