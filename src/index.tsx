import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
   createBrowserRouter,
   RouterProvider,
} from "react-router-dom";

import Layout/* , { layoutLoader } */ from "./components/layout/Layout";
import HomePage from "./components/home_page/HomePage";
import SecondPage/* , { secondLoader } */ from "./components/second_page/SecondPage";
import NotFoundPage from "./components/not_found_page/NotFoundPage";
//import './index.css';
//import App from './App';
import reportWebVitals from './reportWebVitals';

console.log(ReactDOM);

const router = createBrowserRouter([
   {
      path: "/",
      element: <Layout />,
      /* loader: layoutLoader, */
      children: [
         {
            index: true,
            element: <HomePage />,
         },
         {
            path: "/second",
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

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
   <RouterProvider router={router} />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
