import * as React from "react";
//import ReactDOM from "react-dom/client";
import {
   createBrowserRouter,
   RouterProvider,
} from "react-router-dom";

import Layout/* , { layoutLoader } */ from "./components/layout/Layout";
import HomePage from "./components/home_page/HomePage";
import SecondPage/* , { secondLoader } */ from "./components/second_page/SecondPage";
import NotFoundPage from "./components/not_found_page/NotFoundPage";



function App() {

const router = createBrowserRouter([
   {
      path: "/",
      element: <Layout />,
      children: [
         {
            index: true,
            element: <HomePage />,
            /* loader: layoutLoader, */
         },
         {
            path: "/secondPage",
            element: <SecondPage />,
            /* loader: secondLoader, */
         },
         {
            path: "/*",
            element: <NotFoundPage />,
            /* loader: secondLoader, */
         },
      ],
   },
]);
   return <RouterProvider router={router} />
}

export default App;
