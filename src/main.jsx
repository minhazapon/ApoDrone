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
import Jewellery from './shop file/Jewellery';
import Scooty from './shop file/Scooty';
import Shaver from './shop file/Shaver';
import Shoes from './shop file/Shoes';
import Skin from './shop file/Skin';
import Smart from './shop file/Smart';
import Stroller from './shop file/Stroller';
import Wallet from './shop file/Wallet';
import AboutMother from './about file/AboutMother';
import Service from './service file/Service';
import Contact from './contact file/Contact';


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
      {
        path: "/jewellery",
        element: <Jewellery></Jewellery>  ,
      },
      {
        path: "/scooty",
        element: <Scooty></Scooty>   ,
      },
      {
        path: "/shaver",
        element: <Shaver></Shaver>  ,
      },
      {
        path: "/shoes",
        element: <Shoes></Shoes>  ,
      },
      {
        path: "/skincare",
        element: <Skin></Skin>  ,
      },
      {
        path: "/smart",
        element: <Smart></Smart>  ,
      },
      {
        path: "/stroller",
        element: <Stroller></Stroller>  ,
      },
      {
        path: "/wallet",
        element: <Wallet></Wallet>  ,
      },
      {
        path: "/AboutMother",
        element: <AboutMother></AboutMother>   ,
      },
      {
        path: "/Service",
        element: <Service></Service>  ,
      },
      {
        path: "/contact",
        element: <Contact></Contact>  ,
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
