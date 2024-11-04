import React from 'react';

const Photocards = ({ item }) => {
    return (
        <div className="card card-compact bg-gradient-to-r from-white via-[#ece3f0] to-white shadow-xl">
            <figure>
                <img src={item.product_image} alt={item.product_title}   className="w-full max-w-[90%] mx-auto mt-4 h-auto sm:h-52 md:h-50 lg:h-50 object-cover rounded-lg shadow-md transition-transform duration-300 transform hover:scale-105 hover:brightness-110" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{item.product_title}</h2>
                <p className="font-bold">Price: {item.price}$</p>
                <div className="card-actions justify-end">
                    <button className="bg-white border border-[#9538E2] text-[#9538E2] rounded-full py-2 px-4 hover:bg-[#9538E2] hover:text-white focus:ring-2 focus:ring-[#9538E2] focus:outline-none transition-all duration-300">
                        View Details
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Photocards;






