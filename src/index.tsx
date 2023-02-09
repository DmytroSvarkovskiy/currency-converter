import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './conponents/App';
import { Provider } from 'react-redux';
import store from './Redux/store';
import { BrowserRouter } from 'react-router-dom';
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter basename="/currency-converter">
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
