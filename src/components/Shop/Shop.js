import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';


const Shop = () => {

    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    const handleAddToCart = (product) => {
        //console.log(product);
        const newCart = [...cart, product];
        setCart(newCart);
    }

   // console.log(products);
    useEffect(() => {
       fetch("https://fakestoreapi.com/products")
       .then(res => res.json())
       .then(data => setProducts(data))
      },[]);

    return (
        <div className='product-container'>
            <div className='products'>
                {
                    products.map(product => 
                    <div className='product-items' key={product.id}>
                        <Product key={product.id} product={product} handleAddToCart={handleAddToCart}></Product>
                    </div> 
                    )
                }
            </div>
            <div className='cart-container'> 
                <Cart cart={cart}></Cart>
            </div>    
        </div>
    );
};

export default Shop;