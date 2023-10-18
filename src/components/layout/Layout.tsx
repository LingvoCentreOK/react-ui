import React from 'react';

import { Outlet } from "react-router-dom";

import Header from '../header/Header';

const Layout: React.FC = () => {
   return (
      <div className='Layout'>
         Layout
         {/* <SideBar /> */}
         {/* <div className='Layout-body'> */}
            <Header />
            <Outlet />  {/* <Outlet /> is used as a placeholder to output content according to the current route, i.e. all nested routes render their content via <Outlet /> */}
         {/* </div> */}
      </div>
   )
}

export default Layout;