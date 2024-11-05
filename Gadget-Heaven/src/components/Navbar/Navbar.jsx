import React, { useContext } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
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
                            <li><a>Statistics</a></li>
                            <li><NavLink to="/dashboard">Dashboard</NavLink></li>
                        </ul>
                    </div>
                </div>

                <div className="navbar-center">
                    <a className={`btn btn-ghost text-xl ${isHomePage ? 'text-white' : 'text-black'} mx-auto`}>Gadget Heaven</a>
                </div>

                <div className="navbar-end hidden lg:flex ml-20 ">
                    <ul className={`menu menu-horizontal p-0 ${isHomePage ? 'text-white' : 'text-black'}`}>
                        <li><NavLink to="/">Homepage</NavLink></li>
                        <li><a>Statistics</a></li>
                        <li><NavLink to="/dashboard">Dashboard</NavLink></li>
                    </ul>
                </div>

                <div className="navbar-end gap-4 ">
                    <button className="btn btn-ghost btn-circle bg-slate-600 relative">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6 text-black"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M3 3h2l.4 2M7 13h10l1.6-8H6.4L5.2 4H3m3 9l-1 5h14l-1-5M5 21a2 2 0 100-4 2 2 0 000 4zm12 0a2 2 0 100-4 2 2 0 000 4z" />
                        </svg>
                        <span className="absolute top-0 right-0 translate-x-1/2 -translate-y-1/2 badge badge-sm bg-slate-800 text-white">{cartCount || ''}</span>
                    </button>

                    <button className="btn btn-ghost btn-circle bg-slate-600">
                        <div className="indicator">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6 text-black"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4.318 6.318a4.5 4.5 0 016.364 0L12 7.636l1.318-1.318a4.5 4.5 0 116.364 6.364L12 20.364l-7.682-7.682a4.5 4.5 0 010-6.364z" />
                            </svg>
                        </div>
                    </button>
                </div>
            </div>

            {isHomePage && <Banner />}
        </div>
    );
};

export default Navbar;
