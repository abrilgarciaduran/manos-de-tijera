import React from 'react';
import { NavLink } from 'react-router-dom';
import './item.css'

function Item(props) {
    return (
        <li className='item' id={props.product.id} key={props.product.id}>
            <NavLink to={`/product/${props.product.id}`}>
                <img src={props.product.img} alt={props.product.title} />
                <h5>{props.product.title}</h5>
                <p>${props.product.price}</p>
                <button className='button-center'>VER PRODUCTO</button>
            </NavLink>
        </li>
    )
}
export default Item;