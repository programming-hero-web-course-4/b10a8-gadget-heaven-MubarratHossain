import React, { createContext, useState, useEffect } from 'react';

export const CartContext = createContext();

const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    const [wishlist, setWishlist] = useState([]);

    useEffect(() => {
        const savedCart = JSON.parse(localStorage.getItem('cart')) || [];
        const savedWishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
        setCart(savedCart);
        setWishlist(savedWishlist);
    }, []);

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart));
        localStorage.setItem('wishlist', JSON.stringify(wishlist));
    }, [cart, wishlist]);

    const addToCart = (item) => {
        setCart((prevCart) => [...prevCart, item]);
    };

    const addToWishlist = (item) => {
        if (!wishlist.find((wishItem) => wishItem.product_id === item.product_id)) {
            setWishlist((prevWishlist) => [...prevWishlist, item]);
        }
    };

    return (
        <CartContext.Provider value={{ cart, wishlist, addToCart, addToWishlist }}>
            {children}
        </CartContext.Provider>
    );
};

export default CartProvider;