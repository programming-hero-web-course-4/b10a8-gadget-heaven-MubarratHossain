import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { FaShoppingCart, FaStar } from 'react-icons/fa'; 

const Shop = () => {
    const data = useLoaderData();
    const categories = data.categories;

    return (
        <div className="p-6 max-w-7xl mx-auto">
            <h3 className="text-3xl font-bold mb-4 text-center">Shop List</h3>

            {categories.map((category) => (
                <div key={category.category_name} className="mb-6">
                    <h4 className="text-2xl font-semibold mb-2 flex items-center">
                        <FaShoppingCart className="mr-2 text-xl" /> 
                        {category.category_name}
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {category.items.map((item) => (
                            <div key={item.product_id} className="border rounded-lg p-4 shadow-md transition-transform duration-200 hover:scale-105">
                                <img 
                                    src={item.product_image} 
                                    alt={item.product_title} 
                                    className="w-full h-48 object-cover rounded-t-lg mb-2"
                                />
                                <h5 className="text-lg font-bold">{item.product_title}</h5>
                                <p className="text-gray-700">{item.description}</p>
                                <p className="text-lg font-semibold mt-2">${item.price}</p>
                                <p className="text-sm text-gray-500 flex items-center">
                                    <FaStar className="text-yellow-400 mr-1" /> 
                                    {item.rating} 
                                </p>
                                <button className="mt-4 w-full px-4 py-2 bg-[#9538E2] text-white rounded-full hover:bg-[#7a28a5] transition duration-300 flex items-center justify-center">
                                    <FaShoppingCart className="mr-2" /> 
                                    Buy Now
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Shop;


