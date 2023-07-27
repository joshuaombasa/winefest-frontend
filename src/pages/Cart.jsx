import React from "react";

import WineImage from "../components/WineImage";

export default function Cart() {

    const [winesInCart, setWinesInCart] = React.useState(null)

    let cartItemsJsx

    if (winesInCart) {
        cartItemsJsx = winesInCart.map(item => (
            <p>{item.price}</p>
        ))
    }

    React.useEffect(() => {
        fetch('http://localhost:3000/orders')
            .then(res => res.json())
            .then(data => {
                setWinesInCart(data)
                console.log(data)
            })
    },[])

    return (
        <div className="cart--container">
            {winesInCart && cartItemsJsx}
        </div>
    )
}