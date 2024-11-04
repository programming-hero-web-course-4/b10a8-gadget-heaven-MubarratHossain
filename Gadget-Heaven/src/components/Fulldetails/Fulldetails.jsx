import React, { useContext } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import ReactStars from 'react-rating-stars-component';
import { CartContext } from '../CartProvider/CartProvider';

const Fulldetails = () => {
    const { id } = useParams();
    const data = useLoaderData();
    const { cart, wishlist, addToCart, addToWishlist } = useContext(CartContext);

    const device = data.categories
        .flatMap(category => category.items)
        .find(device => device.product_id === parseInt(id));

    if (!device) {
        return <div>Item not found</div>;
    }

    const isInWishlist = wishlist.some(item => item.product_id === device.product_id);

    const handleAddToCart = () => {
        addToCart(device);
    };

    const handleAddToWishlist = () => {
        addToWishlist(device);
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

            <p className={`text-lg font-semibold mb-4 ${device.availability ? 'text-green-600' : 'text-red-600'}`}>
                {device.availability ? 'In Stock' : 'Out of Stock'}
            </p>

            {device.rating && (
                <div className="flex items-center mb-4">
                    <span className="text-lg font-semibold mr-2">Rating:</span>
                    <ReactStars
                        count={5}
                        value={device.rating}
                        size={24}
                        activeColor="#FFD700"
                        edit={false}
                    />
                </div>
            )}

            <h4 className="text-lg font-semibold mb-2">Features:</h4>
            <ul className="list-disc list-inside mb-4">
                {device.Specification.map((Specification, index) => (
                    <li key={index} className="text-gray-600">{Specification}</li>
                ))}
            </ul>

            <div className="flex space-x-4">
                <button
                    onClick={handleAddToCart}
                    className="bg-[#9538E2] text-white py-2 px-4 rounded-lg shadow-md hover:bg-[#7A2BB2] transition duration-300"
                >
                    Add to Cart
                </button>
                <button
                    onClick={handleAddToWishlist}
                    disabled={isInWishlist}
                    className={`py-2 px-4 rounded-lg shadow-md transition duration-300 ${
                        isInWishlist
                            ? 'bg-gray-300 text-gray-600 cursor-not-allowed'
                            : 'bg-white border border-[#9538E2] text-[#9538E2] hover:bg-[#9538E2] hover:text-white'
                    }`}
                >
                    ♥ Add to Wishlist
                </button>
            </div>
        </div>
    );
};

export default Fulldetails;

