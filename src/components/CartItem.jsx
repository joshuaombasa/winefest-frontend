import React from "react";
import WineImage from "./WineImage";


export default function CartItem({ item }) {


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
                <a className="remove--wine--from--cart--link">Remove</a>
            </div>
        </div>
    )

}