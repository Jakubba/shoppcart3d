import React from "react";
import "./App.scss";

export const Navbar = () => {
    return(
        <div className ="navbar">

            <div className = "leftSide">
                <img src={require('./images/icons8-mana-100.png')} alt={""}/>
            </div>
            <h1 className="nav-bar-titlle">Shoping Cart</h1>
        </div>
    )
}

export default Navbar;
