
import ProductsList from '../productsList/productsList';
import HeaderComponent from '../headerComponent/headerComponent'
function ShopWrapper() {
    return (
        <div className="ShopWrapper">
            <HeaderComponent></HeaderComponent>
            <ProductsList></ProductsList>

        </div>
    )
}

export default ShopWrapper;