import React, { useContext, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { CartContext } from '../CartProvider/CartProvider';
import { toast } from 'react-toastify';

import { FaCartPlus, FaHeart } from 'react-icons/fa';

const Fulldetails = () => {
    const { id } = useParams();
    const data = useLoaderData();
    const { addToCart, addToWishlist, wishlistItems, cartItems } = useContext(CartContext);
    const [isCartAdded, setIsCartAdded] = useState(false);

    const device = data.categories
        .flatMap(category => category.items)
        .find(device => device.product_id === parseInt(id));

    if (!device) {
        return <div>Item not found</div>;
    }

    const isInWishlist = wishlistItems.some(item => item.product_id === device.product_id);
    const isInCart = cartItems.some(item => item.product_id === device.product_id);

    const handleAddToCart = () => {
        addToCart(device);
        setIsCartAdded(true);
        toast.success(
            <div className="flex items-center gap-2">
                <FaCartPlus className="text-xl text-[#9538E2]" />
                <span>Added to Cart!</span>
            </div>,
            {
                position: 'top-center',
                icon: false,
                autoClose: 3000,
                style: {
                    backgroundColor: '#f0f4ff',
                    color: '#333',
                    borderRadius: '8px',
                    padding: '10px 15px'
                },
            }
        );
    };

    const handleAddToWishlist = () => {
        addToWishlist(device);
        toast.info(
            <div className="flex items-center gap-2">
                <FaHeart className="text-xl text-[#e63946]" />
                <span>Your Item Is In Wishlist!</span>
            </div>,
            {
                position: 'top-center',
                icon: false,
                autoClose: 3000,
                style: {
                    backgroundColor: '#ffebf0', 
                    color: '#333',           
                    borderRadius: '8px',
                    padding: '10px 15px',
                    boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)', 
                },
            }
        );
    };

    return (
        <div className="p-4 max-w-2xl mx-auto bg-white shadow-lg rounded-lg">

            <img
                src={device.product_image}
                alt={device.product_title}
                className="w-full h-auto rounded-lg mb-4 object-cover"
            />
            <h3 className="text-2xl font-bold mb-2">{device.product_title}</h3>
            <p className="text-xl font-semibold text-gray-700 mb-4">Price: ${device.price}</p>
            <p className="text-gray-600 mb-4">{device.description}</p>
            <div className="flex space-x-4">
                {isInCart ? (
                    <button
                        disabled
                        className="bg-green-500 text-white py-2 px-4 rounded-lg shadow-md opacity-50 cursor-not-allowed"
                    >
                        Added to Cart
                    </button>
                ) : (
                    <button
                        onClick={handleAddToCart}
                        disabled={isCartAdded}
                        className={`bg-[#9538E2] text-white py-2 px-4 rounded-lg shadow-md ${isCartAdded ? 'opacity-50 cursor-not-allowed' : ''}`}
                    >
                        {isCartAdded ? 'Added to Cart' : 'Add to Cart'}
                    </button>
                )}
                <button
                    onClick={handleAddToWishlist}
                    disabled={isInWishlist}
                    className={`py-2 px-4 rounded-lg ${isInWishlist ? 'bg-gray-300' : 'bg-white border text-[#9538E2] hover:bg-[#9538E2] hover:text-white'}`}
                >
                    ♥ {isInWishlist ? 'In Wishlist' : 'Add to Wishlist'}
                </button>
            </div>
        </div>
    );
};

export default Fulldetails;


