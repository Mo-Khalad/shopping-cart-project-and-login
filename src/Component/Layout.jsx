import React ,{ useContext } from 'react';
import SiteNavbar from './Header/SiteNavbar';
import { Outlet } from 'react-router-dom';
import Footer from './Footer/Footer';
import { TokenContext } from "./../Store/TokenContext.js";

const Layout = () => {
    const { token } = useContext(TokenContext);

      return (
        <div>
          <SiteNavbar/>
          <Outlet></Outlet>
          {token !== null && <Footer/>}
        

        </div>
      )
}    
export default Layout
    
  

