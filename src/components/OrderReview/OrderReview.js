import React from 'react';
import { useHistory } from 'react-router';
import useCart from '../../hooks/useCart';
import useProducts from '../../hooks/useProducts';
import { clearTheCart, deleteFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';

const OrderReview = () => {
    const [products] = useProducts();
    const [cart, setCart] = useCart(products);
    const history = useHistory();

    const handleRemove = key => {
        const newCart = cart.filter(product => product.key !== key);
        setCart(newCart);
        deleteFromDb(key);
    }

    const handleOrderPlace = () => {
        history.push('/orderplaced');
        setCart([]);
        clearTheCart();
    }
    return (
        <div className="shop-container">
            <div className="product-container">
                {
                    cart.map(product => <ReviewItem
                        key={product.key}
                        product={product}
                        handleRemove={handleRemove}></ReviewItem>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}>
                    <button
                        onClick={handleOrderPlace}
                        className="btn-regular">Place Order</button>
                </Cart>
            </div>
        </div>
    );
};

export default OrderReview;