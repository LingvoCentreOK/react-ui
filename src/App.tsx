import * as React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

import Layout from "./components/layout/Layout";
import HomePage from "./components/home_page/HomePage";
import NewsPage from "./components/news_page/NewsPage";
import ErrorPage from "./components/error_page/ErrorPage";

const theme = createTheme({
  palette: {
    primary: {
      main: "#8674AA",
      light: "#42a5f5",
      dark: "#1565c0",
      contrastText: "#FFFFFF",
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 430,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
});

const App: React.FC = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      errorElement: <ErrorPage />,
      children: [
        {
          index: true,
          element: <HomePage />,
        },
        {
          path: "/news-page",
          element: <NewsPage />,
        },
      ],
    },
  ]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <RouterProvider router={router} />
    </ThemeProvider>
  );
};

export default App;
