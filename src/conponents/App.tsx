import { createGlobalStyle } from 'styled-components';
import { FC } from 'react';
import { useEffect } from 'react';
import { fetchCours } from '../Redux/operations';
import { useAppDispatch, useAppSelector } from '../hooks';

const GlobalStyle = createGlobalStyle`
  ul,h1,h2,h3,h4,h5,h6,li,p{list-style:none;margin:0;padding:0;};
  body{
   display: flex;
   justify-content:center;
   align-items:center;
   color: '#010101'; 
  }
`;

const App: FC = () => {
  const dispatch = useAppDispatch();
  const { currentRate } = useAppSelector(state => state.exchangeRate);

  console.log(currentRate);

  useEffect(() => {
    dispatch(fetchCours(currentRate));
  }, [currentRate, dispatch]);
  return (
    <>
      <div>testing</div>
      <GlobalStyle />
    </>
  );
};

export default App;
