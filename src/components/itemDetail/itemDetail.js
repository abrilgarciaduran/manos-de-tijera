import React, { useState, useContext, useEffect } from 'react';
import { CartContext } from '../../context/cartContext.js';
import ItemQuantitySelector from '../itemQuantitySelector/itemQuantitySelector.js';
import AddToCart from './addToCart.js';


function ItemDetail(props) {
    const [cart, setCart] = useContext(CartContext);
    const [count, setCount] = useState(0);
    const handleAdd = () => {
        if (count < 10) {
            setCount(count + 1);
        } else {
            alert('Has llegado a la cantidad maxima')
        }
    }
    const handleSub = () => {
        if (count > 0) {
            setCount(count - 1);
        } else {
            alert('Has llegado a la cantidad minima')
        }
    }
    const handleChange = (event) => {
        setCount(event.target.value);
    };
    const isRepeated = (cart, id) => {
        let repeated = false;
        cart.forEach(product => {
            if (product.id === id) {
                repeated = true;
            }
        })
        return repeated;
    }
    const addToCart = () => {
        const product = props.item;
        product.quantity = count;
        if (cart.length === 0) {
            setCart(currentCart => [...currentCart, product]);
            console.log('Adding the first');
        } else if (!isRepeated(cart, product.id)) {
            setCart(currentCart => [...currentCart, product]);
            console.log('Adding new one');
        } else {
            const currentCart = cart;
            currentCart.map(item => {
                if (item.id === product.id) {
                    console.log('Había ' + item.quantity + '. Agrego ' + count)
                    item.quantity = item.quantity + count;
                }
            })
            console.log('Adding repeated');
            setCart(currentCart);
        }
    }
    return (
        <section className='item-detail-section'>
            <div className='item-detail flex-column'>
                <img src={props.item.img} alt={props.item.title} />
            </div>
            <div className='item-detail-actions'>
                <h3>{props.item.title}</h3>
                <p>{props.item.description}</p>
                <h2>${props.item.price}</h2>
                <ItemQuantitySelector count={count} handleAdd={handleAdd} handleSub={handleSub} handleChange={handleChange} />
                <AddToCart count={count} onClick={addToCart} />
            </div>
        </section>
    )

}
export default ItemDetail;