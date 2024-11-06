import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';

import {
  BrowserRouter,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root/Root';
import ErrorPage from './components/Errorpage/Errorpage';
import Homepage from './components/Homepage/Homepage';
import Dashboard from './components/Dashboard/Dashboard';
import Fulldetails from './components/Fulldetails/Fulldetails';
import CartProvider from './components/CartProvider/CartProvider';

import Shop from './Shop/Shop';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Statistics from './components/Statistics/Statistics';
import { HelmetProvider } from 'react-helmet-async'; 


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Homepage />,
      },
      {
        path: "/product/:id",
        element: <Fulldetails />,
        loader: () => fetch('/DeviceData.json'),
      },

      {
        path: 'dashboard',
        element: <Dashboard />,
      },
      {
        path: '/statistic',
        element: <Statistics />,
        loader:() => fetch('/DeviceData.json')
      },

      {
        path: '/shop',
        element: <Shop />,
        loader: () => fetch('/DeviceData.json'),

      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    
    <HelmetProvider>
      <CartProvider>
        <RouterProvider router={router} />
        <ToastContainer position="top-center" theme="light" />
      </CartProvider>
    </HelmetProvider>
  </StrictMode>,
);
