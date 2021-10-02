import { Link } from 'react-router-dom';
import Cart from '../components/Cart/Cart';
import Product from '../components/Product/Product';
import useCart from '../hooks/useCart';
import useProducts from '../hooks/useProducts';
import { addToDb } from '../utilities/fakedb';
import './Shop.css';

const Shop = () => {
    const [products] = useProducts();
    const [cart, setCart] = useCart(products);

    const handleAddToCart = product => {
        const exist = cart.find(pd => pd.key === product.key);
        let newCart = [];
        if (exist) {
            const rest = cart.filter(pd => pd.key !== product.key);
            product.quantity += 1;
            newCart = [...rest, product];
        }
        else {
            product.quantity = 1;
            newCart = [...cart, product];
        }
        setCart(newCart);
        // save to local storage (for now)
        addToDb(product.key);
    }

    return (
        <div className="shop-container">
            <div className="product-container">
                {
                    products.map(product => <Product
                        product={product}
                        key={product.key}
                        handleAddToCart={handleAddToCart}>
                    </Product>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}>
                    <Link to="/orders">
                        <button className="btn-regular">Review Items</button>
                    </Link>
                </Cart>
            </div>
        </div>
    );
};

export default Shop;