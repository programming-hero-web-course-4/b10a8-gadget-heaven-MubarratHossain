import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../CartProvider/CartProvider';
import { FaShoppingCart, FaSortAmountDown, FaMoneyBillWaveAlt, FaTrash, FaCheckCircle } from 'react-icons/fa';
import { toast } from 'react-toastify'; // Import react-toastify
import 'react-toastify/dist/ReactToastify.css'; // Import the styles

const Cart = () => {
    const { cartItems, removeFromCart, sortCartByPrice, totalMoney, makePurchase } = useContext(CartContext);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const navigate = useNavigate();

    const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);

    const handlePurchase = () => {
        
        if (totalPrice > totalMoney) {
            toast.error("You don't have enough money to make this purchase. Please remove items from the cart.");
        } else {
            makePurchase(totalPrice);
            setIsModalOpen(true);
        }
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        navigate('/');
    };

    return (
        <div className="max-w-4xl mx-auto p-4 sm:p-6 lg:p-8">
            <h3 className="text-2xl mb-4 text-center">
                <FaShoppingCart className="inline-block mr-2" />
                Your Cart
            </h3>
            <p className="font-semibold text-lg text-center mb-4">Available Money: ${totalMoney.toFixed(2)}</p>

            <div className="flex flex-col md:flex-row justify-between items-center mb-4">
                <button
                    onClick={sortCartByPrice}
                    className="flex items-center bg-[#9538E2] text-white py-2 px-4 rounded-md mb-2 md:mb-0 md:mr-2"
                >
                    <FaSortAmountDown className="mr-2" />
                    Sort by Price
                </button>
                <button
                    className={`flex items-center bg-green-500 text-white py-2 px-4 rounded-md ${cartItems.length === 0 ? 'opacity-50 cursor-not-allowed' : ''}`}
                    onClick={handlePurchase}
                    disabled={cartItems.length === 0}
                >
                    <FaMoneyBillWaveAlt className="mr-2" />
                    Purchase
                </button>
                <p className="font-semibold text-lg mt-2 md:mt-0">Total Cost: ${totalPrice.toFixed(2)}</p>
            </div>

            <ul className='bg-slate-300 rounded-lg shadow-lg w-full p-4 mt-4 space-y-4 '>
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
                                className="flex items-center bg-red-500 text-white py-1 px-2 rounded-md hover:bg-red-600 transition duration-200"
                            >
                                <FaTrash className="mr-1" />
                                Remove
                            </button>
                        </li>
                    ))
                ) : (
                    <p className="text-center text-gray-500">Your cart is empty.</p>
                )}
            </ul>

            {isModalOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                    <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full text-center">
                        <div className="flex justify-center mb-4">
                            <FaCheckCircle className="text-green-500 text-4xl" />
                        </div>
                        <h2 className="text-2xl font-semibold mb-4">Congratulations!</h2>
                        <p className="mb-6">Your purchase was successful.</p>
                        <button
                            onClick={handleCloseModal}
                            className="bg-blue-500 text-white py-2 px-4 rounded-md"
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Cart;


