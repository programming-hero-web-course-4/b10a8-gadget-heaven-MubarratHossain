import React, { useContext } from 'react';
import { CartContext } from '../CartProvider/CartProvider'; // Adjust the import based on your file structure

const Wishlist = () => {
    const { wishlistItems, removeFromWishlist } = useContext(CartContext);

    return (
        <div className="p-4">
            <h3 className="text-2xl mb-4">Your Wishlist</h3>
            <ul>
                {wishlistItems.length > 0 ? (
                    wishlistItems.map((item) => (
                        <li key={item.product_id} className="flex items-center justify-between mb-2">
                            <div className="flex items-center">
                                <img src={item.product_image} alt={item.product_title} className="w-16 h-16 object-cover mr-4" />
                                <div>
                                    <h4 className="font-bold">{item.product_title}</h4>
                                    <p>Price: ${item.price}</p>
                                </div>
                            </div>
                            <button 
                                onClick={() => removeFromWishlist(item.product_id)} 
                                className="bg-red-500 text-white py-1 px-2 rounded-md"
                            >
                                Remove
                            </button>
                        </li>
                    ))
                ) : (
                    <p>Your wishlist is empty.</p>
                )}
            </ul>
        </div>
    );
};

export default Wishlist;