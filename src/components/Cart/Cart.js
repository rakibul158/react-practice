import React from 'react';

const Cart = (props) => {
   // console.log(props);
   const cartItem = props.cart;
    const total = cartItem.reduce((total, product) => total + product.price, 0);
    
    return (
        <div>
            <h3>Cart Summary</h3>
            <h4>Order Item: {cartItem.length}</h4>
            <p>Price: {total}</p>
        </div>
    );
};

export default Cart;