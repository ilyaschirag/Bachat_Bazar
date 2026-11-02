
import React from "react";
import "./Navbar.css";

function Navbar() {
    return (
        <div className="navbar">

            <div className="logo">
                Aasani Se Khareedo
            </div>

            <div className="middle">
                <input
                    type="text"
                    placeholder="Search products, e.g. Amul Milk"
                />
            </div>

            <div className="right">
                <p>Chirag</p>
                <button>Log Out</button>
            </div>

        </div>
    );
}

export default Navbar;
