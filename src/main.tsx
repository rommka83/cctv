import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import { ThemeProvider } from '@material-tailwind/react';
import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';

import { router } from './routes/routes';
import { store } from './store/store';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </ThemeProvider>
  </React.StrictMode>,
);
