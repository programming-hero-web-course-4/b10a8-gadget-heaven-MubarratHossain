import React, { useContext, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { FaShoppingCart, FaHeart, FaCog, FaMoneyBillWave } from 'react-icons/fa'; 
import Banner from '../Banner/Banner';
import { CartContext } from '../CartProvider/CartProvider';

const Navbar = () => {
    const { cartCount, totalMoney } = useContext(CartContext);
    const location = useLocation();
    const isHomePage = location.pathname === '/';
    const [showMoney, setShowMoney] = useState(false); 

    const toggleMoneyVisibility = () => {
        setShowMoney(prev => !prev);
    };

    return (
        <div className={`${isHomePage ? 'bg-gradient-to-r from-[#9538E2] to-[#7C29B3]' : 'bg-white shadow-lg backdrop-blur-md bg-opacity-90'} p-4 rounded-xl text-white ${isHomePage ? '' : 'sticky top-0 z-50'}`}>
            <div className="navbar flex justify-between items-center">
                <div className="navbar-start lg:hidden">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className={`h-6 w-6 ${isHomePage ? 'text-white' : 'text-black'}`}
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16M4 18h7" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow">
                            <li><NavLink to="/">Homepage</NavLink></li>
                            <li><NavLink to='/statistic'>Statistics</NavLink></li>
                            <li><NavLink to="/dashboard">Dashboard</NavLink></li>
                        </ul>
                    </div>
                </div>

                <div className="navbar-center">
                    <span className={`flex items-center text-xl ${isHomePage ? 'text-white' : 'text-black'} mx-auto`}>
                        <FaCog className="mr-2" /> 
                        Gadget Heaven
                    </span>
                </div>

                <div className="navbar-end hidden lg:flex items-center gap-6">
                    <ul className={`menu menu-horizontal p-0 ${isHomePage ? 'text-white' : 'text-black'}`}>
                        <li><NavLink to="/">Homepage</NavLink></li>
                        <li><NavLink to='/statistic'>Statistics</NavLink></li>
                        <li><NavLink to="/dashboard">Dashboard</NavLink></li>
                    </ul>

                   
                    <div className="flex items-center">
                        <button onClick={toggleMoneyVisibility} className={`text-lg font-semibold ${isHomePage ? 'text-white' : 'text-black'} flex items-center`}>
                            <FaMoneyBillWave className="mr-1" />
                        </button>
                        {showMoney && (
                            <span className={`text-lg font-semibold ${isHomePage ? 'text-white' : 'text-black'} ml-2`}>
                                ${totalMoney.toFixed(2)}
                            </span>
                        )}
                    </div>

                    <button className="btn btn-ghost btn-circle bg-white relative p-1">
                        <FaShoppingCart className="h-4 w-4 text-black" />
                        <span className="absolute top-0 right-0 translate-x-1/2 -translate-y-1/2 badge badge-sm bg-slate-500 text-white">
                            {cartCount || ''}
                        </span>
                    </button>

                    <button className="btn btn-ghost btn-circle bg-white p-1">
                        <FaHeart className="h-4 w-4 text-black" />
                    </button>
                </div>

                
                <div className="navbar-end lg:hidden flex items-center space-x-4">
                    
                    <button className="btn btn-ghost btn-circle bg-white p-1 hidden">
                        <FaMoneyBillWave className="h-4 w-4 text-black" />
                    </button>

                    <button className="btn btn-ghost btn-circle bg-white p-1 relative">
                        <FaShoppingCart className="h-4 w-4 text-black" />
                        <span className="absolute top-0 right-0 translate-x-1/2 -translate-y-1/2 badge badge-sm bg-slate-500 text-white">
                            {cartCount || ''}
                        </span>
                    </button>

                    <button className="btn btn-ghost btn-circle bg-white p-1">
                        <FaHeart className="h-4 w-4 text-black" />
                    </button>
                </div>
            </div>

            {isHomePage && <Banner />}
        </div>
    );
};

export default Navbar;
