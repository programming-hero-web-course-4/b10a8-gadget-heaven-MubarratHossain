import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import Banner from '../Banner/Banner';


const Navbar = () => {
    const location = useLocation();
    const isHomePage = location.pathname === '/';

    return (
        <div className={`${isHomePage ? 'bg-gradient-to-r from-[#9538E2] to-[#7C29B3]' : 'bg-white shadow-lg'} m-4 p-4 rounded-xl text-white`}>
          
            <div className="navbar">
                <div className="navbar-start">
                   
                <a className={`btn btn-ghost text-xl ${isHomePage ? 'text-white' : 'text-black'}`}>Gadget Heaven</a>
                </div>

                <div className="navbar-center hidden lg:flex">
                    
                <ul className={`menu menu-horizontal p-0 ${isHomePage ? 'text-white' : 'text-black'}`}>
                        <li><NavLink to ='/'>Homepage</NavLink></li>
                        <li><a>Statistics</a></li>
                        <li><NavLink to ='dashboard'>Dashboard</NavLink></li>
                    </ul>
                </div>

                <div className="navbar-center lg:hidden">
                    
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5 text-white"
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
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            <li><NavLink to ='/'>Homepage</NavLink></li>
                            <li><a>Statistics</a></li>
                            <li><a>Dashboard</a></li>
                        </ul>
                    </div>
                </div>

                <div className="navbar-end gap-4">
                   
                    <button className="btn btn-ghost btn-circle bg-white">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 text-black"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M3 3h2l.4 2M7 13h10l1.6-8H6.4L5.2 4H3m3 9l-1 5h14l-1-5M5 21a2 2 0 100-4 2 2 0 000 4zm12 0a2 2 0 100-4 2 2 0 000 4z" />
                        </svg>
                    </button>

                   
                    <button className="btn btn-ghost btn-circle bg-white">
                        <div className="indicator">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5 text-black"
                                fill="white"
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

            
            {location.pathname === '/' && <Banner></Banner>}
        </div>
    );
};

export default Navbar;