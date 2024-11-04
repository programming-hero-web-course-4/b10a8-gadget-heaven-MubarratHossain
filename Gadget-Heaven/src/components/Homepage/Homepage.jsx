import React, { useEffect, useState } from 'react';
import backgroundImg from './electronic.jpg';
import Photocard from '../PhotoCard/Photocards';


const Homepage = () => {
    const [device, setDevice] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState(null);

    useEffect(() => {
        fetch('./DeviceData.json')
            .then(response => response.json())
            .then(data => setDevice(data.categories))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    return (
        <div className="flex-grow bg-white p-4">
            <h3 className="text-2xl text-black flex justify-center items-center text-center">
                {device.length ? `Explore Cutting-Edge Gadgets (${device.length} Categories)` : 'Loading categories...'}
            </h3>

            <div className="flex flex-col md:flex-row">
                <div className="w-full md:w-1/4 h-[500px] border-2 bg-gray-100 shadow-lg mt-4 rounded-lg relative bg-cover bg-center"
                    style={{ backgroundImage: `url(${backgroundImg})` }}>
                    <div className="bg-black bg-opacity-50 absolute inset-0 rounded-lg"></div>
                    <div className="relative flex flex-col items-stretch text-left mt-4 p-4 overflow-auto gap-2">
                        <button
                            className={`bg-gray-800 ${selectedCategory === null ? 'bg-[#9538E2]' : 'hover:bg-[#9538E2]'} text-white py-2 px-4 rounded-lg mb-2 w-full`}
                            onClick={() => setSelectedCategory(null)}>
                            All Products
                        </button>
                        {device.map((category, index) => (
                            <button
                                key={index}
                                className={`bg-gray-800 ${selectedCategory === category.category_name ? 'bg-[#9538E2]' : 'bg-[#9538E2] hover:bg-[#9538E2]'} text-white py-2 px-3 rounded-lg mb-2 w-full`}
                                onClick={() => setSelectedCategory(category.category_name)}>
                                {category.category_name}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="w-full md:w-3/4 p-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {device.flatMap(category =>
                            (!selectedCategory || category.category_name === selectedCategory)
                                ? category.items.map(item => <Photocard key={item.product_id} item={item} />)
                                : []
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Homepage;

