import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'
import {addToDb, getStoredCart} from '../../utilities/fakedb'
const Shop = () => {
    const [products, setProducts] =useState([])
    const [cart, setCart] = useState([])

    useEffect(()=>{
        fetch('products.json')
        .then(res => res.json())
        .then(data=> setProducts(data))
    },[])
    //getting data from local storage
    useEffect(() =>{
    const storedCart = getStoredCart()
    const savedCart = []
    for(const id in storedCart){
        const addedProduct = products.find(product => product.id === id);
        if(addedProduct){
            const quantity = storedCart[id]
            addedProduct.quantity=quantity;
           savedCart.push(addedProduct);
        }
    }
    // setting data from old click
    setCart(savedCart);
    },[products])
    const handleAddToCart = (sselectedProduct)=>{
        console.log(sselectedProduct);
        let newCart = [];
        const exists = cart.find(product => product.id === sselectedProduct.id)
        if(!exists){
            sselectedProduct.quantity = 1;
            newCart = [...cart , sselectedProduct]
        }
        else{
            const rest = cart.filter(product => product.id !== sselectedProduct.id);
            exists.quantity = exists.quantity + 1;
            newCart = [...rest, exists]
        } 
        setCart(newCart);
        addToDb(sselectedProduct.id)
        
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
                 <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;