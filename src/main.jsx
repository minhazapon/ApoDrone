import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './raw css/Raw.css'


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Root';
import Home from './Home';
import Shop from './shop file/Shop';
import Backpack from './shop file/Backpack';
import Bag from './shop file/Bag';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root> ,
    children: [
      {
        path: "/",
        element: <Home></Home>  ,
      },
      {
        path: "/shop",
        element: <Shop></Shop> ,
      },
      {
        path: "/back",
        element: <Backpack></Backpack> ,
      },
      {
        path: "/bag",
        element: <Bag></Bag> ,
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
