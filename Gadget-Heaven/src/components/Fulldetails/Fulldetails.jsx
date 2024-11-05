import React, { useContext, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { CartContext } from '../CartProvider/CartProvider';

const Fulldetails = () => {
    const { id } = useParams();
    const data = useLoaderData();
    const { addToCart, addToWishlist, wishlistItems } = useContext(CartContext);
    const [isCartAdded, setIsCartAdded] = useState(false); // Local state for cart button

    const device = data.categories
        .flatMap(category => category.items)
        .find(device => device.product_id === parseInt(id));

    if (!device) {
        return <div>Item not found</div>;
    }

    const isInWishlist = wishlistItems.some(item => item.product_id === device.product_id);

    const handleAddToCart = () => {
        addToCart(device);
        setIsCartAdded(true); // Disable button after adding to cart
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
                <button
                    onClick={handleAddToCart}
                    disabled={isCartAdded} // Disable if item is added to cart
                    className={`bg-[#9538E2] text-white py-2 px-4 rounded-lg shadow-md ${isCartAdded ? 'opacity-50 cursor-not-allowed' : ''}`}
                >
                    {isCartAdded ? 'Added to Cart' : 'Add to Cart'}
                </button>
                <button
                    onClick={() => addToWishlist(device)}
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
