import React, { createContext, useState } from 'react';

export const CartContext = createContext();

const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);
    const [wishlistItems, setWishlistItems] = useState([]);
    const [totalMoney, setTotalMoney] = useState(5000);
    const [cartCount, setCartCount] = useState(0);
    const [wishlistCount, setWishlistCount] = useState(0); 

    const addToCart = (item) => {
        setCartItems(prevItems => [...prevItems, item]);
        setCartCount(prevCount => prevCount + 1);

        localStorage.setItem(item.product_id, JSON.stringify({
            id: item.product_id,
            name: item.product_title,
        }));
    };

    const updateTotalMoney = (amount) => {
        setTotalMoney(prev => prev - amount);
    };

    const removeFromCart = (productId) => {
        setCartItems(prevItems => prevItems.filter(item => item.product_id !== productId));
        setCartCount(prevCount => (prevCount > 0 ? prevCount - 1 : 0));
    };

    const addToWishlist = (item) => {
        if (!wishlistItems.some(wishlistItem => wishlistItem.product_id === item.product_id)) {
            setWishlistItems(prevItems => [...prevItems, item]);
            setWishlistCount(prevCount => prevCount + 1); 

            localStorage.setItem(`wishlist_${item.product_id}`, JSON.stringify({
                id: item.product_id,
                name: item.product_title,
            }));
        }
    };

    const removeFromWishlist = (productId) => {
        setWishlistItems(prevItems => prevItems.filter(item => item.product_id !== productId));
        setWishlistCount(prevCount => (prevCount > 0 ? prevCount - 1 : 0)); 
        localStorage.removeItem(`wishlist_${productId}`);
    };

    const sortCartByPrice = () => {
        setCartItems(prevItems => [...prevItems].sort((a, b) => b.price - a.price));
    };

    const makePurchase = (totalPrice) => {
        if (cartItems.length > 0 && totalMoney >= totalPrice) {
            const purchasedItems = cartItems.map(item => ({
                product_id: item.product_id,
                product_title: item.product_title,
            }));

            const updatedTotalMoney = totalMoney - totalPrice;
            setTotalMoney(updatedTotalMoney);
            setCartItems([]);
            setCartCount(0);

            const purchaseDetails = {
                items: purchasedItems,
                totalCost: totalPrice,
                remainingMoney: updatedTotalMoney,
                timestamp: new Date().toISOString(),
            };

            localStorage.setItem('lastPurchase', JSON.stringify(purchaseDetails));
        }
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
            updateTotalMoney,
            cartCount,
            wishlistCount 
        }}>
            {children}
        </CartContext.Provider>
    );
};

export default CartProvider;

