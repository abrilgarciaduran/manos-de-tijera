import React from 'react';
import imgHardcoded from '../../assets/logo.png';
import './checkoutItem.css';

function CheckoutItem(props) {
    return (
        <li className='checkout-item'>
            <div>
                <img src={imgHardcoded} alt='Imagen harcodeada de producto' className='img-medium' />
            </div>
            <div>
                <h3>{props.data.title}</h3>
                <p>{props.data.description}</p>
            </div>
            <div>
                <p>Cantidad: {props.data.quantity} <br />(${props.data.price} c/u)</p>
            </div>
            <div>
                <p>Precio total: ${(props.data.quantity * props.data.price)}</p>
            </div>
        </li>
    )
}
export default CheckoutItem;