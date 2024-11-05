import React, { createContext, useState } from 'react';
import Modal from '../modal/Modal';

export const CartContext = createContext();

const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);
    const [wishlistItems, setWishlistItems] = useState([]);
    const [totalMoney, setTotalMoney] = useState(10000);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalTitle, setModalTitle] = useState('');
    const [modalMessage, setModalMessage] = useState('');
    const [cartCount, setCartCount] = useState(0);

    const addToCart = (item) => {
        setCartItems(prevItems => [...prevItems, item]);
        setCartCount((prevCount) => prevCount + 1);

        // Save product_id and name to local storage
        localStorage.setItem(item.product_id, JSON.stringify({
            id: item.product_id,
            name: item.product_title,
        }));
    };

    const removeFromCart = (productId) => {
        setCartItems(prevItems => prevItems.filter(item => item.product_id !== productId));
        setCartCount((prevCount) => prevCount > 0 ? prevCount - 1 : 0);
    };

    const addToWishlist = (item) => {
        if (!wishlistItems.some(wishlistItem => wishlistItem.product_id === item.product_id)) {
            setWishlistItems(prevItems => [...prevItems, item]);

            // Save product_id and name to local storage
            localStorage.setItem(`wishlist_${item.product_id}`, JSON.stringify({
                id: item.product_id,
                name: item.product_title,
            }));
        }
    };

    const removeFromWishlist = (productId) => {
        setWishlistItems(prevItems => prevItems.filter(item => item.product_id !== productId));
        localStorage.removeItem(`wishlist_${productId}`); // Remove from local storage
    };

    const sortCartByPrice = () => {
        setCartItems(prevItems => [...prevItems].sort((a, b) => b.price - a.price));
    };

    const makePurchase = (totalPrice) => {
        if (cartItems.length === 0) {
            setModalTitle('Purchase Unavailable');
            setModalMessage("Your cart is empty. Please add items to your cart before making a purchase.");
        } else if (totalMoney >= totalPrice) {
            const purchasedItems = cartItems.map(item => ({
                product_id: item.product_id,
                product_title: item.product_title, // Include the product title
            }));

            const updatedTotalMoney = totalMoney - totalPrice;

            setTotalMoney(updatedTotalMoney);
            setCartItems([]);
            setCartCount(0);

            setModalTitle('Purchase Successful');
            setModalMessage(`You spent $${totalPrice.toFixed(2)}.`);

            // Create purchase details including product_id and product_title
            const purchaseDetails = {
                items: purchasedItems,
                totalCost: totalPrice,
                remainingMoney: updatedTotalMoney,
                timestamp: new Date().toISOString(),
            };
            localStorage.setItem('lastPurchase', JSON.stringify(purchaseDetails));
        } else {
            setModalTitle('Insufficient Funds');
            setModalMessage("You don't have enough funds to complete the purchase.");
        }
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
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
            closeModal,
            cartCount
        }}>
            {children}
            <Modal isOpen={isModalOpen} onClose={closeModal} title={modalTitle} message={modalMessage} />
        </CartContext.Provider>
    );
};

export default CartProvider;
