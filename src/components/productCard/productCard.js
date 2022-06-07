import './productCard.css'
function ProductCard(props) {
    let product = props.product

    return (
        <div className="wrapper">
            <div>{product.name}</div>
            <div>{product.id}</div>
            <div>{product.price}</div>
            <div>{product.image}</div>
        </div>
    )
}

export default ProductCard;