import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
// import Header from './components/Header/Header';
import Root from './components/Root/Root';
import ErrorPage from './components/ErrorPage/ErrorPage';
import Home from './components/Home/Home';
// import Dashboard from './components/Dashboard/Dashboard';
import GadgetDetails from './components/GadgetDetails/GadgetDetails';
import Statistics from './components/Statistics/Statistics';
// import NewCart from './components/NewCart/NewCart';
// import Cart from './components/Cart/Cart';
import Category from './components/Category/Category';
import Dashboard from './components/Dashboard/Dashboard';
// import Error from './components/Error/Error';
// import ListedGadgets from './components/ListedGadgets/ListedGadgets';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch('../categories.json'),
        children: [
          {
            path: "/",
            element: <Category></Category>,
            loader: () => fetch('../allProducts.json')
          },
          {
            path: "/category/:category",
            element: <Category></Category>,
            loader: () => fetch('../allProducts.json')
          },
          // {
          //   path: "/error",
          //   element: <Error></Error>,
          //   loader: () => fetch('./error.json')
          // }
        ]
      },
      {
        path: "/statistics",
        element: <Statistics></Statistics>
      },
      {
        path: "gadget/:gadgetId",
        element:<GadgetDetails></GadgetDetails>,
        loader: () => fetch('../allProducts.json')
      },
      {
        path: "/dashboard",
        element: <Dashboard></Dashboard>,
        loader: () => fetch('../allProducts.json')

      }
    ],
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
