import React from 'react';

const Cart = ({cart}) => {
    // destriting instate of using props
    return (
        <div>
            <h2>This is cart container</h2>
            <p>Selected Item : {cart.length}</p>
        </div>
    );
};

export default Cart;