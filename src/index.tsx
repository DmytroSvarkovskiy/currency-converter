import React from 'react';
import './index.css';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import store from './redux/store';
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
