import React, { useContext } from 'react';
import { CartContext } from '../CartProvider/CartProvider';

const Cart = () => {
    const { cartItems, removeFromCart, sortCartByPrice } = useContext(CartContext);

    console.log("Current Cart Items:", cartItems); 

    const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);

    return (
        <div className="p-4">
            <h3 className="text-2xl mb-4">Your Cart</h3>
            <p className="mb-4">Here you can review your selected items before proceeding to purchase.</p>
            <div className="flex justify-between items-center mb-4">
                <button
                    onClick={sortCartByPrice}
                    className="bg-[#9538E2] text-white py-2 px-4 rounded-md"
                >
                    Sort by Price
                </button>
                <button
                    className="bg-green-500 text-white py-2 px-4 rounded-md"
                    
                    onClick={() => alert('Proceeding to purchase')}
                >
                    Purchase
                </button>
                <p className="font-semibold">Total Cost: ${totalPrice.toFixed(2)}</p>
            </div>
            <ul className='bg-slate-300 rounded-lg shadow-md w-full p-4'>
                {cartItems.length > 0 ? (
                    cartItems.map((item) => (
                        <li key={item.product_id} className="flex items-center justify-between border-b py-2 last:border-b-0">
                            <div className="flex items-center">
                                <img src={item.product_image} alt={item.product_title} className="w-16 h-16 object-cover mr-4 rounded-md shadow" />
                                <div>
                                    <h4 className="font-bold text-lg">{item.product_title}</h4>
                                    <p className="text-gray-600">Price: ${item.price.toFixed(2)}</p>
                                </div>
                            </div>
                            <button
                                onClick={() => removeFromCart(item.product_id)}
                                className="bg-red-500 text-white py-1 px-2 rounded-md hover:bg-red-600 transition duration-200"
                            >
                                Remove
                            </button>
                        </li>
                    ))
                ) : (
                    <p className="text-center text-gray-500">Your cart is empty.</p>
                )}
            </ul>
        </div>
    );
};

export default Cart;