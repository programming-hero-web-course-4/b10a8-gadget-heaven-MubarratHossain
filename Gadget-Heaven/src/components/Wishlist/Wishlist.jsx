import React, { useContext } from 'react';
import { CartContext } from '../CartProvider/CartProvider';

const Wishlist = () => {
    const { wishlistItems, removeFromWishlist, addToCart, cartItems } = useContext(CartContext);

    return (
        <div className="p-4">
            <h3 className="text-2xl mb-4">Your Wishlist</h3>
            <ul className="space-y-4">
                {wishlistItems.length > 0 ? (
                    wishlistItems.map((item) => {
                        const isInCart = cartItems.some(cartItem => cartItem.product_id === item.product_id);
                        return (
                            <div key={item.product_id} className=" bg-slate-300 rounded-lg shadow-md p-4 flex items-center justify-between">
                                <div className="flex items-center">
                                    <img src={item.product_image} alt={item.product_title} className="w-16 h-16 object-cover mr-4 rounded-md" />
                                    <div>
                                        <h4 className="font-bold text-lg">{item.product_title}</h4>
                                        <p className="text-gray-700">Price: ${item.price.toFixed(2)}</p>
                                    </div>
                                </div>
                                <div className="flex space-x-2">
                                    <button 
                                        onClick={() => {
                                            addToCart(item); 
                                            removeFromWishlist(item.product_id); 
                                        }} 
                                        disabled={isInCart} 
                                        className={`bg-green-500 text-white py-1 px-2 rounded-md ${isInCart ? 'opacity-50 cursor-not-allowed' : ''}`}
                                    >
                                        {isInCart ? 'Added to Cart' : 'Add to Cart'}
                                    </button>
                                    <button 
                                        onClick={() => removeFromWishlist(item.product_id)} 
                                        className="bg-red-500 text-white py-1 px-2 rounded-md"
                                    >
                                        Remove
                                    </button>
                                </div>
                            </div>
                        );
                    })
                ) : (
                    <p>Your wishlist is empty.</p>
                )}
            </ul>
        </div>
    );
};

export default Wishlist;
