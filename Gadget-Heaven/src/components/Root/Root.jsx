
import React from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import { Outlet, useLocation } from 'react-router-dom';








const Root = () => {
    const location =useLocation();
     const isHomepage = location.pathname === '/';
    return (
        <div className="flex flex-col min-h-screen">  
            <Navbar />
            <div className={`flex-grow mt-4 ${isHomepage ? 'pt-48 md:pt-[300px] lg:pt-[600px]' : 'pt-4'}`}>
               <Outlet></Outlet>
            </div>
            
                
            
            <Footer />
        </div>
    );
};

export default Root;
