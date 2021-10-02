import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const { cart } = props;
    let totalQuantity = 0;
    let total = 0;
    for (const product of cart) {
        if (!product.quantity) {
            product.quantity = 1;
        }
        total = total + product.price * product.quantity;
        totalQuantity = totalQuantity + product.quantity;
    }
    const shipping = cart.reduce((previous, product) => previous + product.shipping, 0);
    const totalBeforeTax = total + shipping;
    const tax = totalBeforeTax * 0.1;
    const orderTotal = totalBeforeTax + tax;
    return (
        <div className="cart-container">
            <h2>Orders Summary</h2>
            <h3>Items Ordered: {totalQuantity}</h3>
            <div className="price-container">
                <div className="price">
                    <p>Items:</p>
                    <p>{total.toFixed(2)}</p>
                </div>
                <div className="price">
                    <p>Shipping & handling:</p>
                    <p>{shipping.toFixed(2)}</p>
                </div>
                <div className="price">
                    <p>Total before Tax:</p>
                    <p>{totalBeforeTax.toFixed(2)}</p>
                </div>
                <div className="price">
                    <p>Estimated Tax:</p>
                    <p>{tax.toFixed(2)}</p>
                </div>
                <div className="price">
                    <p className="total">Order total:</p>
                    <p>{orderTotal.toFixed(2)}</p>
                </div>
                <div>
                    {props.children}
                </div>
            </div>
        </div>
    );
};

export default Cart;