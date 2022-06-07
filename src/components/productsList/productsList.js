import React from "react";
import ProductCard from '../productCard/productCard'
import productsListJSON from '../../products.json'
import './productsList.css'
function ProductsList() {
    let products = productsListJSON.map((product, index) =>
        <div key={index}>
            <ProductCard product={product}></ProductCard>
        </div>)
    return (
        <div className="cards_list">{products}</div>
    )
}
export default ProductsList; 