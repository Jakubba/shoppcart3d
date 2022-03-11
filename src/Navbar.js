import React from "react";
import "./App.scss";

export const Navbar = () => {
    return(
        <div className ="navbar">

            <div className = "leftSide">
                <img src={require('./images/icons8-mana-100.png')} alt={""}/>
            </div>
            <h1>Magic Shop</h1>
            <div className="rightSide">
                <a href="/signup" className="navLinks">SIGN UP</a>
                <a href="/login" className="navLinks">LOGIN</a>
            </div>
        </div>
    )
}

export default Navbar;
