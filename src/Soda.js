import React from "react";
import { Link } from "react-router-dom";

function Soda(){
    return (
        <div>
        <h1>Soda</h1>
        <img src="https://louisianapantry.com/cdn/shop/products/1054_0335.jpg?v=1659545515"
        height = "250"
        width = "250"></img> 
        <Link to="/">Back</Link>
        </div>
    )
}

export default Soda