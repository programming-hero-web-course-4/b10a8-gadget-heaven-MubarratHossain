import React, { useState } from 'react';
import Cart from '../Cart/Cart';
import Wishlist from '../Wishlist/Wishlist';

const Dashboard = () => {
    const [activeTab, setActiveTab] = useState('cart');

    return (
        <div className='flex flex-col items-center bg-gradient-to-r from-[#9538E2] to-[#7C29B3] m-4 p-4 rounded-xl'>
            <h3 className="text-3xl text-white">Dashboard</h3>
            <p className='text-white'>Welcome to the Dashboard. Organize and Select your Favourite Devices With Gadget-Heaven Official Dashboard.</p>

            <div className="flex gap-4 mt-4 text-white">
                <button
                    className={`border-2 py-2 px-6 rounded-lg shadow-md ${activeTab === 'cart' ? 'bg-white text-black' : ''}`}
                    onClick={() => setActiveTab('cart')}
                >
                    Cart
                </button>
                <button
                    className={`border-2 py-2 px-6 rounded-lg shadow-md ${activeTab === 'wishlist' ? 'bg-white text-black' : ''}`}
                    onClick={() => setActiveTab('wishlist')}
                >
                    Wishlist
                </button>
            </div>

            
            <div className="relative mt-16 w-full max-w-2xl bg-gradient-to-r from-[#D6C4E0] to-[#9538E2] rounded-lg shadow-lg p-4">
                {activeTab === 'cart' ? <Cart /> : <Wishlist />}
            </div>
        </div>
    );
};

export default Dashboard;