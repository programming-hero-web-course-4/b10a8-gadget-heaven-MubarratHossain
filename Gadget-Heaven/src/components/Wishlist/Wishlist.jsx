import React, { useContext } from 'react';
import { CartContext } from '../CartProvider/CartProvider';
import { FaHeart, FaShoppingCart, FaTrash } from 'react-icons/fa';

const Wishlist = () => {
    const { wishlistItems, removeFromWishlist, addToCart, cartItems } = useContext(CartContext);

    return (
        <div className="max-w-4xl mx-auto p-4 sm:p-6 lg:p-8">
            <h3 className="text-2xl mb-4 text-center">
                <FaHeart className="inline-block mr-2 text-red-500" />
                Your Wishlist
            </h3>

            <div className="space-y-4">
                {wishlistItems.length > 0 ? (
                    wishlistItems.map((item) => {
                        const isInCart = cartItems.some(cartItem => cartItem.product_id === item.product_id);
                        return (
                            <div
                                key={item.product_id}
                                className="bg-slate-300 rounded-lg shadow-md p-4 flex flex-col sm:flex-row items-center sm:justify-between"
                            >
                                <div className="flex items-center w-full sm:w-auto">
                                    <img src={item.product_image} alt={item.product_title} className="w-16 h-16 object-cover mr-4 rounded-md" />
                                    <div>
                                        <h4 className="font-bold text-lg">{item.product_title}</h4>
                                        <p className="text-gray-700">Price: ${item.price.toFixed(2)}</p>
                                    </div>
                                </div>
                                <div className="flex space-x-2 mt-4 sm:mt-0 w-full sm:w-auto">
                                    <button
                                        onClick={() => {
                                            addToCart(item);
                                            removeFromWishlist(item.product_id);
                                        }}
                                        disabled={isInCart}
                                        className={`flex items-center justify-center w-full sm:w-auto bg-green-500 text-white py-2 px-3 rounded-md ${isInCart ? 'opacity-50 cursor-not-allowed' : ''}`}
                                    >
                                        <FaShoppingCart className="mr-2 text-lg sm:text-base" /> 
                                        <span className="text-xs sm:text-sm">
                                            {isInCart ? 'Added to Cart' : 'Add to Cart'}
                                        </span>
                                    </button>

                                    <button
                                        onClick={() => removeFromWishlist(item.product_id)}
                                        className="flex items-center justify-center w-full sm:w-auto bg-red-500 text-white py-2 px-3 rounded-md"
                                    >
                                        <FaTrash className="mr-2 text-lg sm:text-base" /> 
                                        <span className="text-xs sm:text-sm">Remove</span> 
                                    </button>

                                </div>
                            </div>
                        );
                    })
                ) : (
                    <p className="text-center text-gray-500">Your wishlist is empty.</p>
                )}
            </div>
        </div>
    );
};

export default Wishlist;

