import React from "react";
import './Homepage.css'
import Category from "../Category/Category";
import Products from "../Products/Products";

function Homepage(){
    return(
        <>
            <Category/>
            <Products/>
        </>
    )
}

export default Homepage