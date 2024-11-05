import React, { useContext } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { FaShoppingCart, FaHeart, FaCog } from 'react-icons/fa'; // Importing relevant icons
import Banner from '../Banner/Banner';
import { CartContext } from '../CartProvider/CartProvider';

const Navbar = () => {
    const { cartCount } = useContext(CartContext);
    const location = useLocation();
    const isHomePage = location.pathname === '/';

    return (
        <div className={`${isHomePage ? 'bg-gradient-to-r from-[#9538E2] to-[#7C29B3]' : 'bg-white shadow-lg'} p-4 rounded-xl text-white`}>
            <div className="navbar">
                <div className="navbar-start lg:hidden">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6 text-white"
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
                        <FaCog className="mr-2 h-6 w-6" /> {/* Gadget icon next to the name */}
                        Gadget Heaven
                    </span>
                </div>

                <div className="navbar-end hidden lg:flex ml-20">
                    <ul className={`menu menu-horizontal p-0 ${isHomePage ? 'text-white' : 'text-black'}`}>
                        <li><NavLink to="/">Homepage</NavLink></li>
                        <li><NavLink to='/statistic'>Statistics</NavLink></li>
                        <li><NavLink to="/dashboard">Dashboard</NavLink></li>
                    </ul>
                </div>

                <div className="navbar-end gap-4">
                    <button className="btn btn-ghost btn-circle bg-white relative p-1">
                        <FaShoppingCart className="h-4 w-4 text-black" />
                        <span className="absolute top-0 right-0 translate-x-1/2 -translate-y-1/2 badge badge-sm bg-slate-500 text-white">
                            {cartCount || ''}
                        </span>
                    </button>

                    <button className="btn btn-ghost btn-circle bg-white p-1">
                        <div className="indicator">
                            <FaHeart className="h-4 w-4 text-black" />
                        </div>
                    </button>
                </div>
            </div>

            {isHomePage && <Banner />}
        </div>
    );
};

export default Navbar;
