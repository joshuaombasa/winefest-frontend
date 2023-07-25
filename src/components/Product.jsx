import React from "react";
import WineImage from "./WineImage";

export default function Product({ item }) {
    return (
        <div className="product--container">
            <h4 className="wine--name">{item.name}</h4>
            <WineImage filename={item.filename} />
            <p className="wine--price">${item.price}</p>
            <p className="wine--description">{item.description}</p>
            <a href="#" className="add--to--cart">Add to cart</a>
        </div>
    )
}