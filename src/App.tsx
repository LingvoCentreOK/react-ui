import * as React from "react";
//import ReactDOM from "react-dom/client";
import {
   createBrowserRouter,
   RouterProvider,
} from "react-router-dom";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

import Layout/* , { layoutLoader } */ from "./components/layout/Layout";
import HomePage from "./components/home_page/HomePage";
import NewsPage/* , { secondLoader } */ from "./components/news_page/NewsPage";
import NotFoundPage from "./components/not_found_page/NotFoundPage";
//import MyParallaxComponent from './components/my_parallax_component/MyParallaxComponent';

const theme = createTheme({
   palette: {
      primary: {
         main: '#8674AA',
         light: '#42a5f5',
         dark: '#1565c0',
         contrastText: '#FFFFFF',
      },
      secondary: {
         main: '#9c27b0',
         light: '#ba68c8',
         dark: '#7b1fa2',
         contrastText: '#FFFFFF',
      }
   },
   /* components: {
      MuiButton: {
         variants: [
            {
               props: { variant: 'dashed' },
               style: {
                  textTransform: 'none',
                  border: `4px dashed #fff`,
               },
            },
            {
               props: { variant: 'dashed', color: 'secondary' },
               style: {
                  border: `4px dashed #fff`,
               },
            },
         ],
      },
   }, */
});

const App: React.FC = () => {

   const router = createBrowserRouter([
      {
         path: "/",
         element: <Layout />,
         children: [
            {
               index: true,
               /* element: <MyParallaxComponent />, */
               element: <HomePage />,
               /* loader: layoutLoader, */
            },
            {
               path: "/news-page",
               element: <NewsPage />,
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
   return (
      <ThemeProvider theme={theme}>
         <CssBaseline />
         <RouterProvider router={router} />
      </ThemeProvider >)
}

export default App;
