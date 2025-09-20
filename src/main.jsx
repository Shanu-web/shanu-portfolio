import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import App from './App';
import { LocaleProvider } from './context/LocaleContext';
import { ThemeProvider } from './context/ThemeContext';
import './index.css';

const baseName = (import.meta.env.BASE_URL ?? '/').replace(/\/$/, '');
const routerBaseName = baseName === '' || baseName === '/' ? undefined : baseName;

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
      <LocaleProvider>
        <BrowserRouter basename={routerBaseName}>
          <App />
        </BrowserRouter>
      </LocaleProvider>
    </ThemeProvider>
  </React.StrictMode>,
);
