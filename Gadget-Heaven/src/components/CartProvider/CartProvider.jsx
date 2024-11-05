import React, { createContext, useState } from 'react';
import Modal from '../modal/Modal'; // Adjust the import path based on your folder structure

export const CartContext = createContext();

const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);
    const [wishlistItems, setWishlistItems] = useState([]);
    const [totalMoney, setTotalMoney] = useState(10000); // Set your initial total money
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalTitle, setModalTitle] = useState('');
    const [modalMessage, setModalMessage] = useState('');

    const addToCart = (item) => {
        console.log("Adding item to cart:", item); // Debugging addition
        setCartItems(prevItems => [...prevItems, item]);
    };

    const removeFromCart = (productId) => {
        setCartItems(prevItems => prevItems.filter(item => item.product_id !== productId));
    };

    const addToWishlist = (item) => {
        if (!wishlistItems.some(wishlistItem => wishlistItem.product_id === item.product_id)) {
            setWishlistItems(prevItems => [...prevItems, item]);
        }
    };

    const removeFromWishlist = (productId) => {
        setWishlistItems(prevItems => prevItems.filter(item => item.product_id !== productId));
    };

    const sortCartByPrice = () => {
        setCartItems(prevItems => [...prevItems].sort((a, b) => b.price - a.price));
    };

    const makePurchase = (totalPrice) => {
        if (cartItems.length === 0) {
            // If the cart is empty
            setModalTitle('Purchase Unavailable');
            setModalMessage("Your cart is empty. Please add items to your cart before making a purchase.");
        } else if (totalMoney >= totalPrice) {
            const purchasedItems = [...cartItems]; // Store current cart items
            const updatedTotalMoney = totalMoney - totalPrice; // Calculate remaining money

            // Update total money and clear cart
            setTotalMoney(updatedTotalMoney);
            setCartItems([]); // Clear the cart after purchase

            // Set modal content
            setModalTitle('Purchase Successful');
            setModalMessage(`You spent $${totalPrice.toFixed(2)}.`);

            // Store purchase details in local storage
            const purchaseDetails = {
                items: purchasedItems,
                totalCost: totalPrice,
                remainingMoney: updatedTotalMoney,
                timestamp: new Date().toISOString(), // Store purchase timestamp
            };
            localStorage.setItem('lastPurchase', JSON.stringify(purchaseDetails));
        } else {
            setModalTitle('Insufficient Funds');
            setModalMessage("You don't have enough funds to complete the purchase.");
        }
        setIsModalOpen(true); // Show the modal
    };

    const closeModal = () => {
        setIsModalOpen(false); // Close the modal
    };

    return (
        <CartContext.Provider value={{
            cartItems,
            addToCart,
            removeFromCart,
            wishlistItems,
            addToWishlist,
            removeFromWishlist,
            sortCartByPrice,
            totalMoney,
            makePurchase,
            setTotalMoney,
        }}>
            {children}
            <Modal isOpen={isModalOpen} onClose={closeModal} title={modalTitle} message={modalMessage} />
        </CartContext.Provider>
    );
};

export default CartProvider;
