import React from "react";
import ProductCard from '../productCard/productCard'
import productsListJSON from '../../products.json'
function ProductsList() {
    let array = [
        { "name": "phone", "id": "1", "image": "", "price": "150" },
        { "name": "phone", "id": "1", "image": "", "price": "150" },
        { "name": "phone", "id": "1", "image": "", "price": "150" },
        { "name": "phone", "id": "1", "image": "", "price": "150" }
    ]
    let products = productsListJSON.map((product, index) =>
        <div className="wrapper" key={index}>
            <ProductCard product={product}></ProductCard>
        </div>)
    return (
        <div>{products}</div>
    )
}
export default ProductsList;