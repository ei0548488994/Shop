import './productCard.css'
function ProductCard(props) {
    let product = props.product
    function addToCart() {
        
    }   
    return (
        <div className="wrapper">
            <div>{product.name}</div>
            <div>{product.id}</div>
            <div>{product.price}</div>
            <div>{product.image}</div>
            <button onClick={addToCart(product.id)}>add to cart</button>
        </div>
    )
}

export default ProductCard;