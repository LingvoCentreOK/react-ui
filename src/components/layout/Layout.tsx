import React from 'react';

import { Outlet } from "react-router-dom";
//import MyParallaxComponent from '../my_parallax_component/MyParallaxComponent';
//import Header from '../header/Header';


const Layout: React.FC = () => {
   return (
      <>
         <Outlet />
      </>
   )
}

export default Layout;