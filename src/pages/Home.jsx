import React from "react";
import Product from "../components/Product";
// https://www.goodhousekeeping.com/food-products/g32266782/best-rose-wine-brands/
export default function Home() {

    const [productsData, setProductsData] = React.useState(null)

    React.useEffect(() => {
        const getWinesData  = async () => {
            try {
                const res = await  fetch('http://localhost:3000/wines')
                const data = res.json()
                setProductsData(data)
            } catch(error) {
                console.log(error)
            }
        }

        getWinesData()
        
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