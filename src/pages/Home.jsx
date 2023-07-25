import React from "react";
import Product from "../components/Product";

export default function Home() {

    const [productsData, setProductsData] = React.useState(null)

    React.useEffect(() => {
        fetch('http://localhost:3000/wines')
            .then(res => res.json())
            .then(data => {
                setProductsData(data)
                console.log(data)
            })
    }, [])

    let productsJsx
    if (productsData) {
        productsJsx = productsData.map(item => (
            <Product key={item.product_id} item={item}/>
        ))
    }

    return (
        <div className="products--container">
            {productsData && productsJsx}
        </div>
    )
}