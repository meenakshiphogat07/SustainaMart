<<<<<<< HEAD
import { createContext } from "react";
=======
import { createContext, useState } from "react";
>>>>>>> upstream/main
import { products } from "../assets/assets"

export const ShopContext = createContext();

const ShopContextProvider = (props) => {
    const currency='₹';
    const deliver_fee=10;
<<<<<<< HEAD
    
    const value = {
        products, currency, deliver_fee
=======
    const [search, setSearch]=useState('');
    const[showSearch, setShowSearch]=useState(false)
    
    const value = {
        products, currency, deliver_fee,
        search,setSearch, showSearch, setShowSearch
>>>>>>> upstream/main
    }

    return (
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    )
}
export default ShopContextProvider;