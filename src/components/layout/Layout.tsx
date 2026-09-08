import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";

const Layout: React.FC = () => {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
};

export default Layout;
