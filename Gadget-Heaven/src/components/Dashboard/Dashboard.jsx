import React from 'react';

const Dashboard = () => {
    return (
        <div className='flex justify-center items-center flex-col bg-gradient-to-r from-[#9538E2] to-[#7C29B3] m-4 p-4'>
            <h3 className="text-3xl text-white">Dashboard</h3>
            <p className='text-white'> Welcome to the Dashboard.Organize and Select your Favourite Devices With Gadget-Heaven Official DashBoard.</p>
            <div className="flex gap-4 mt-4 text-white">
                <button className="border-2 hover:bg-white text-black py-2 px-6 rounded-lg shadow-md">
                    Cart
                </button>
                <button className="border-2 hover:bg-white text-black py-2 px-6 rounded-lg shadow-md">
                    Wishlist
                </button>
            </div>
        </div>
    );
};

export default Dashboard;