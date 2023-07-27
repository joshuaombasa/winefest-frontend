import React from "react";
import WineImage from "./WineImage";


export default function CartItem({ item }) {

    function removeItemFromCart(id) {
        fetch(`http://localhost:3000/orders/${id}`, {
            method : 'DELETE'
        })
           .then(res => res.json())
           .then(data => {
            console.log(data) 
            window.location.reload(); // Refresh the page after removing an item
           })
    }


    return (
        <div className="cart--item--container">
            <div className="left-side">
                <div className="wine--in--cart--image">
                    <WineImage filename={item.filename} />
                </div>
                <p className="wine--in--cart--name">{item.name}</p>
            </div>
            <div className="right-side">
                <p className="wine--in--cart--price">$ {item.price}</p>
                <a href="#" className="remove--wine--from--cart--link"
                  onClick={() => removeItemFromCart(item.id)}
                >Remove</a>
            </div>
        </div>
    )

}