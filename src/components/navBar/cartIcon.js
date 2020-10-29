import React from 'react';
import cart from '../../assets/cart.svg';

function CartIcon() {
    return (
        <img src={cart} alt="carrito de compras" className='img-small' id='cartIcon' />
    )
}
export default CartIcon;