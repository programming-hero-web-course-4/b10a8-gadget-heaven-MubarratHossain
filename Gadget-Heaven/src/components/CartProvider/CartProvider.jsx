import React, { createContext, useState } from 'react';

export const CartContext = createContext();

const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);
    const [wishlistItems, setWishlistItems] = useState([]);

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

    return (
        <CartContext.Provider value={{
            cartItems,
            addToCart,
            removeFromCart,
            wishlistItems,
            addToWishlist,
            removeFromWishlist,
            sortCartByPrice,
        }}>
            {children}
        </CartContext.Provider>
    );
};

export default CartProvider;
