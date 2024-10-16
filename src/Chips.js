import React from "react";
import { Link } from "react-router-dom";

function Chips(){
    return (
        <div>
        <h1>Chips</h1>
        <img src="https://m.media-amazon.com/images/I/8141nrQe0aL.jpg"
        height = "250"
        width = "250"></img> 
        <Link to="/">Back</Link>
        </div>
    )
}

export default Chips