import React from "react";
import WineImage from "./WineImage";


export default function CartItem({ item }) {

    const removeItemFromCart = async (id) => {

        try {
            const res = await fetch(`http://localhost:3000/orders/${id}`, {
                                        method : 'DELETE'
                                    })
            const data = await res.json()
            console.log(data) 
            window.location.reload(); 

        } catch (error) {
            console.log(error)
        }
        
          
           
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