import React from 'react';
import './Product.css'

const Product = (props) => {
    return (
        <div className='product'>
            <h3>{props.product.title}</h3>
            <img src={props.product.image} alt="" />
            <p className='price'>Price: $ {props.product.price}</p>
            <button onClick={ () => props.handleAddToCart(props.product)} className='add-to-card'>add to card</button>
        
        </div>
    );
};

export default Product;