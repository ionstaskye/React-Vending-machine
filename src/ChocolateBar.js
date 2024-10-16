import React from "react";
import { Link } from "react-router-dom";

function ChocolateBar(){
    return (
        <div>
        <h1>Chocolate Bar</h1>
        <img src="https://s7d2.scene7.com/is/image/hersheysassets/0_34000_00240_5_701_24000_097_Item_Front?fmt=webp-alpha&hei=412&qlt=75"
        height = "250"
        width = "250"></img> 
        <Link to="/">Back</Link>
        </div>
    )
}

export default ChocolateBar