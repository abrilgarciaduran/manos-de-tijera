import React from 'react';

function AddToCart(props) {
    return (
        <button onClick={props.onClick} className='button-center' disabled={props.count === 0 ? true : false}>AGREGAR {props.count === 0 ? '' : props.count} AL CARRITO</button>
    )
}
export default AddToCart;