import { createGlobalStyle } from 'styled-components';
import { FC } from 'react';
import { useEffect } from 'react';
import { fetchCours } from '../Redux/operations';

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
  useEffect(() => {
    fetchCours('USD');
  });
  return (
    <>
      <div>testing</div>
      <GlobalStyle />
    </>
  );
};

export default App;
