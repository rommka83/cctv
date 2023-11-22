import { createBrowserRouter } from 'react-router-dom';

import App from '../app/App';
import { BroadcastsPage } from '../pages/broadcastsPage';
import { CalculationPage } from '../pages/calculationPage';
import { ErrorPage } from '../pages/errorPage';
import { LocationPage } from '../pages/locationPage';
import { SessionsPage } from '../pages/sessionsPage';
import { SettingsPage } from '../pages/settingsPage';
import { StartPage } from '../pages/startPage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    // loader: contactLoader,
    children: [
      {
        errorElement: <ErrorPage />,
        children: [
          { index: true, element: <StartPage /> },
          {
            path: '/broadcastsPage',
            element: <BroadcastsPage />,
          },
          {
            path: '/sessionsPage',
            element: <SessionsPage />,
          },
          {
            path: '/calculationPage',
            element: <CalculationPage />,
          },
          {
            path: '/locationPage',
            element: <LocationPage />,
          },
          {
            path: '/settingsPage',
            element: <SettingsPage />,
          },
        ],
      },
    ],
  },
]);
