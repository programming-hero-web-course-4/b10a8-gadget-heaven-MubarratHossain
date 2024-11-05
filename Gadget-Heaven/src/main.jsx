import {  StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root/Root';
import ErrorPage from './components/Errorpage/Errorpage';
import Homepage from './components/Homepage/Homepage';
import Dashboard from './components/Dashboard/Dashboard';

import Fulldetails from './components/Fulldetails/Fulldetails';
import CartProvider from './components/CartProvider/CartProvider';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<ErrorPage></ErrorPage>,
    children: [
      {
      path : '/',
      element:<Homepage></Homepage>,
      },
      {
      path:"/product/:id", 
      element:<Fulldetails></Fulldetails>,
      loader:() => fetch ('/DeviceData.json')

      },
      {
        path:'dashboard',
        element:<Dashboard></Dashboard>
      }
    ]
  },
  
  
  
 
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CartProvider>
      <RouterProvider router={router} />
    </CartProvider>
  </StrictMode>,
)
