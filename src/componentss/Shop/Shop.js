import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Product from '../Product/Product';
import './Shop.css'
const Shop = () => {
    const [products, setProducts] =useState([])
    const [cart, setCart] = useState([])

    useEffect(()=>{
        fetch('products.json')
        .then(res => res.json())
        .then(data=> setProducts(data))
    },[])
    const handleAddToCart = (Product)=>{
        console.log(Product);
        const newCart = [...cart , Product]
        setCart(newCart)
    }
    return (
        <div className='shop-container'>
            <div className='product-container'>
                {
               products.map(product => <Product
                handleAddToCart={handleAddToCart}
                 key={product.id}
                 product={product}>
                 </Product>)
                }
            </div>
            <div className='curt-container'>
                 <h2>This is cart container</h2>
                 <p>Selected Item : {cart.length}</p>
            </div>
        </div>
    );
};

export default Shop;