import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
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
            <button onClick={() => props.handleAddToCart(props.product)}  className='btn-cart'>
                <p className='btn-text'>Add To Curt</p>
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </button>
            
        </div>
    );
};

export default Product;