import React from "react";

export default function Total({ winesInCart }) {

    let totalCost = 0

    if (winesInCart) {
        for (let i = 0 ; i < winesInCart.length ; i++) {
            totalCost += winesInCart[i].price
            
        }
    }


    return (
        <div className="total--wrapper">
            <div className="total--cost--container">
                <p className="total--cost--text">Total cost</p>
                <p className="total--cost">$ { totalCost }</p>
            </div>
            <a  className="complete--order">PAY</a>
        </div>
    )
}