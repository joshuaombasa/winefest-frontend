import React from "react";
import WineImage from "./WineImage";

export default function Product({ item }) {

    

    function addItemToCart() {

        const getItms = async () => {
            try {
                const res = await fetch('http://localhost:3000/orders', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(item)
                })

                const data = await res.json()
                console.log(data)
            } catch (error) {
                console.error(error)
            }
        }

        getItms()

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