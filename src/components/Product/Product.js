import React from 'react';
import Rating from 'react-rating';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart, faStar } from '@fortawesome/free-solid-svg-icons'
import { faStar as farStar } from '@fortawesome/free-regular-svg-icons';
import './Product.css'

const Product = props => {
    const { img, name, price, seller, stock, star } = props.product;
    const cartIcon = <FontAwesomeIcon icon={faShoppingCart} />
    const ratingStar = <FontAwesomeIcon icon={faStar} />
    const ratingStar2 = <FontAwesomeIcon icon={farStar} />

    return (
        <div className="product">
            <div>
                <img src={img} alt="" />
            </div>
            <div className="product-details">
                <h3 className="product-name">{name}</h3>
                <p><small>By: {seller}</small></p>
                <h3 className="product-price">${price}</h3>
                <p>only {stock} left in stock - order soon</p>
                <Rating className="icon-color"
                    initialRating={star}
                    emptySymbol={ratingStar2}
                    fullSymbol={ratingStar}
                    readonly
                />
                <br />
                <br />
                <button
                    onClick={() => props.handleAddToCart(props.product)}
                    className="btn-regular">
                    {cartIcon} add to cart
                </button>
            </div>
        </div>
    );
};

export default Product;