import React from "react";

import WineImage from "../components/WineImage";
import CartItem from "../components/CartItem";

import Total from "../components/Total";

export default function Cart() {

    const [winesInCart, setWinesInCart] = React.useState(null)

    let cartItemsJsx

    if (winesInCart) {
        cartItemsJsx = winesInCart.map(item => (
            <CartItem key={item.id} item={item}/>
        ))
    }

    React.useEffect(() => {
        fetch('http://localhost:3000/orders')
            .then(res => res.json())
            .then(data => {
                setWinesInCart(data)
                // console.log(data)
            })
    },[])

    return (
        <div className="cart--container">
            {winesInCart && cartItemsJsx}
            <Total winesInCart={winesInCart}/>
        </div>
    )
}