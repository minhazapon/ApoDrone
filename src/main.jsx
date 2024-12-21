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
import Cycle from './shop file/Cycle';
import CoffeMaker from './shop file/CoffeMaker';
import Drink from './home file/Drink';
import DroneShop from './shop file/DroneShop';
import HeadPhone from './shop file/HeadPhone';


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
      {
        path: "/cycle",
        element: <Cycle></Cycle> ,
      },
      {
        path: "/coffe",
        element: <CoffeMaker></CoffeMaker> ,
      },
      {
        path: "/drink",
        element: <Drink></Drink> ,
      },
      {
        path: "/drone",
        element:  <DroneShop></DroneShop>  ,
      },
      {
        path: "/headphone",
        element: <HeadPhone></HeadPhone>  ,
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
