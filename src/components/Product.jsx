import React from "react";
import WineImage from "./WineImage";

export default function Product({ item }) {

    // console.log(item)

    function addItemToCart() {

       
        fetch('http://localhost:3000/orders', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(item)
        })
            .then(res => res.json())
            .then(data => console.log(data))
    }

    return (
        <div className="product--container">
            <h4 className="wine--name">{item.name}</h4>
            <WineImage filename={item.filename} />
            <p className="wine--price">${item.price}</p>
            <p className="wine--description">{item.description}</p>
            <a className="add--to--cart" onClick={() => addItemToCart()}>Add to cart</a>
        </div>
    )
}