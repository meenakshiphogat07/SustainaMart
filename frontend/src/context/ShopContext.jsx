import { createContext, useEffect, useState } from "react";
import { products } from "../assets/assets"
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export const ShopContext = createContext();

const ShopContextProvider = (props) => {
    const currency = '₹';
    const delivery_fee = 10;
    const [search, setSearch] = useState('');
    const [showSearch, setShowSearch] = useState(false)
    const [cartItems, setCartItems] = useState({});
    const [ecoPoints, setEcoPoints] = useState(
        Number(localStorage.getItem("ecoPoints")) || 0
    );

    useEffect(() => {
        localStorage.setItem("ecoPoints", ecoPoints);
    }, [ecoPoints]);

    const addEcoPoints = (points) => {
        setEcoPoints(prev => prev + points);
    };

    const useEcoPoints = (points) => {
        setEcoPoints(prev => Math.max(0, prev - points));
    };



    const navigate = useNavigate();

    const addToCart = async (itemId, size) => {
        const productData = products.find(p => p._id === itemId);
        if (productData.category === 'Clothing & Accessories' && !size) {
            toast.error('Select Product Size');
            return;
        }

        let cartData = structuredClone(cartItems);
        const sizeKey = size || "default";

        if (cartData[itemId]) {
            if (cartData[itemId][size]) {
                cartData[itemId][size] += 1;
            }
            else {
                cartData[itemId][size] = 1;
            }
        }
        else {
            cartData[itemId] = {};
            cartData[itemId][size] = 1;
        }
        setCartItems(cartData);
    }

    const getCartCount = () => {
        let totalCount = 0;
        for (const items in cartItems) {
            for (const item in cartItems[items]) {
                try {
                    if (cartItems[items][item] > 0) {
                        totalCount += cartItems[items][item];
                    }
                } catch (error) {

                }

            }
        }
        return totalCount;
    }

    const updateQuantity = (itemId, size, quantity) => {
        let cartData = structuredClone(cartItems);

        if (!cartData[itemId]) return;

        if (quantity <= 0) {
            delete cartData[itemId][size];

            if (Object.keys(cartData[itemId]).length === 0) {
                delete cartData[itemId];
            }
        } else {
            cartData[itemId][size] = quantity;
        }

        setCartItems(cartData);
    };

    const getCartAmount = () => {
        let totalAmount = 0;
        for (const items in cartItems) {
            let itemInfo = products.find((product) => product._id === items);
            for (const item in cartItems[items]) {
                try {
                    if (cartItems[items][item] > 0) {
                        totalAmount += itemInfo.price * cartItems[items][item]
                    }
                } catch (error) {

                }
            }
        }
        return totalAmount;
    }


    const value = {
        products, currency, delivery_fee,
        search, setSearch, showSearch, setShowSearch,
        cartItems, addToCart,
        getCartCount, updateQuantity,
        getCartAmount, navigate,
        ecoPoints,
        addEcoPoints,
        useEcoPoints,

    }

    return (
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    )
}
export default ShopContextProvider;