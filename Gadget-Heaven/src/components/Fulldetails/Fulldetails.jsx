import React, { useContext, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { CartContext } from '../CartProvider/CartProvider';
import { toast } from 'react-toastify';
import { FaCartPlus, FaHeart, FaCheckCircle, FaTimesCircle } from 'react-icons/fa';
import ReactStars from 'react-rating-stars-component';

const Fulldetails = () => {
    const { id } = useParams();
    const data = useLoaderData();
    const { addToCart, addToWishlist, wishlistItems, cartItems } = useContext(CartContext);
    const [isCartAdded, setIsCartAdded] = useState(false);

    
    const device = data?.categories
        ?.flatMap(category => category.items)
        ?.find(device => device.product_id === parseInt(id));

    if (!device) {
        return <div className="text-center text-xl font-bold">Item not found</div>;
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
        <div className="flex flex-col items-center">
            
            <div className="w-full p-6 text-center text-white bg-gradient-to-r from-purple-500 to-purple-700 rounded-lg mb-6">
                <h2 className="text-3xl font-bold">Full Details</h2>
                <p className="mt-2 text-lg">Explore the details of your selected item below.</p>
            </div>

           
            <div className="p-6 max-w-2xl mx-auto bg-slate-200 shadow-lg rounded-lg">
                <img
                    src={device.product_image}
                    alt={device.product_title}
                    className="w-full h-auto rounded-lg mb-4 object-cover"
                />
                
                
                <div className="p-4 rounded-lg bg-gradient-to-r from-purple-500 to-purple-700 text-white mb-4">
                    <h3 className="text-2xl font-bold">{device.product_title}</h3>
                    <p className="text-xl font-semibold">
                        Price: <span className="text-white">${device.price}</span>
                    </p>
                </div>

                <div className="flex items-center mb-4">
                    <span className="mr-2 font-semibold">Rating:</span>
                    <ReactStars
                        count={5}
                        value={device.rating}
                        edit={false}
                        size={24}
                        activeColor="#ffd700"
                    />
                </div>
                <p className="text-gray-600 mb-4">{device.description}</p>

                <h4 className="text-lg font-semibold mb-2">Specifications:</h4>
                <ul className="list-disc list-inside mb-4">
                    {device.Specification && device.Specification.map((spec, index) => (
                        <li key={index} className="mb-1">{spec}</li>
                    ))}
                </ul>

                <p className={`font-semibold flex items-center ${device.availability ? 'text-green-500' : 'text-red-500'}`}>
                    {device.availability ? (
                        <>
                            <FaCheckCircle className="mr-1" />
                            Available
                        </>
                    ) : (
                        <>
                            <FaTimesCircle className="mr-1" />
                            Out of Stock
                        </>
                    )}
                </p>

                <div className="flex space-x-4 mt-4">
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
        </div>
    );
};

export default Fulldetails;

