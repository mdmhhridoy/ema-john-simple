import React from 'react';
import './Product.css'

const Product = (props) => {
    const{name, seller, price, stock, img, category, ratings} = props.product;
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className="product-info">
              <p className='product-name'>{name}</p>
              <p>Price : ${price}</p>
              <p>Seller : {seller}</p>
              <p>Stock : {stock}</p>
              <p><small>Rating : {ratings} Stars</small></p>
            </div>
            <button className='btn-cart'>
                <p>Add To Curt</p>
            </button>
            
        </div>
    );
};

export default Product;