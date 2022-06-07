import logo from './logo.png'
import AddToCart from '../addToCart/AddToCart';
import './headerComponent.css'
function HeaderComponent() {
    return (
        <div>
            <header className='header'>
                <div className="logo">
                    <img src={logo} className="logo" alt="logo" />
                </div>
                <AddToCart></AddToCart>
            </header>
        </div>
    )
}
export default HeaderComponent;