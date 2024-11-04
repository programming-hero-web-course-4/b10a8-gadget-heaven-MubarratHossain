
import React from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import { Outlet } from 'react-router-dom';




const Root = () => {
    return (
        <div className="flex flex-col min-h-screen">  {/* Flex column and min-h-screen for full viewport height */}
            <Navbar />
            <div className="flex-grow mt-4 pt-48 md:pt-[300px] lg:pt-[600px]">
                 
                <Outlet />
            </div>
            <Footer />
        </div>
    );
};

export default Root;
