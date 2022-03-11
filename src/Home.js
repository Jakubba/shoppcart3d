import React from "react";
import Navbar from "./Navbar";
import Products from "./Products";
import "./App.scss";
import Cart from "./Cart";
import { CartProvider} from "react-use-cart";

function App() {
    return (
        <CartProvider>
            <Navbar/>
            <Products/>
            <Cart/>
        </CartProvider>
    )
}

export default App;