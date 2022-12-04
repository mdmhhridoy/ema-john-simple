import React from 'react';
import './Cart.css'
const Cart = (props) => {
    const {cart} = props;
    // destriting instate of using props
    // Calculiting total / shipping prices
    let total = 0;
    let shipping = 0;
    for(const product of cart){
        total= total + product.price;
        shipping = shipping + product.shipping
    }
    const tax =parseFloat((total * 0.10).toFixed(2));
    const grandTotal = total + shipping + tax;
    return (
        <div className='cart'>
            <h2>Order Summary</h2>
            <p>Selected Item : {cart.length}</p>
            <p>Total price : ${total}</p>
            <p>Total shipping : ${shipping}</p>
            <p>Tax : ${tax}</p>
            <h3>Grand Total : ${grandTotal.toFixed(2)}</h3>
        </div>
    );
};

export default Cart;