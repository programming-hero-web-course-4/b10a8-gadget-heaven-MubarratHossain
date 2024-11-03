import React from 'react';
import bannerImage from "./banner.jpg";


const Banner = () => {
    return (
        <div className="relative text-center mt-12">
        <h3 className="text-2xl font-bold">Upgrade Your Tech Accessorize with Gadget Heaven Accessories</h3>
        <p className="mt-4">Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
        
        
        <button className="mt-4 mb-4 px-6 py-2 bg-white text-[#9538E2] rounded-full font-semibold shadow-md 
           transition duration-300 ease-in-out transform hover:bg-[#f3f4f6] hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#b4a4c2] focus:ring-opacity-50">
            Shop Now
        </button>
    
        
        <img
            src={bannerImage}
            alt="Gadget Accessory"
            className="mt-6 absolute left-1/2 transform -translate-x-1/2 -translate-y-8 w-1/2 rounded-2xl border-4 border-white ring-2 ring-[#9538E2] transition-all duration-300 ease-in-out hover:ring-4"
        />
    </div>
    
    
    


    );
};

export default Banner;