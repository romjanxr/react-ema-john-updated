import React from 'react';

const ReviewItem = props => {
    const { name, quantity, price, key } = props.product;
    const { handleRemove } = props;
    return (
        <div className="product">
            <div>
                <h4 className="product-name">{name}</h4>
                <p>Quantity: {quantity}</p>
                <p>Price: {price}</p>
                <button onClick={() => handleRemove(key)} className="btn-regular">Remove</button>
            </div>
        </div>
    );
};

export default ReviewItem;