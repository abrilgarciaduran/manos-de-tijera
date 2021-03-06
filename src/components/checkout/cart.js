import React, { useContext, useState, useEffect } from 'react';
import { CartContext } from '../../context/cartContext.js';
import CheckoutItem from './checkoutItem.js';
import './checkout.css';

function Cart() {
    const [cart, setCart] = useContext(CartContext);
    const [totalPrice, setTotalPrice] = useState(0);
    useEffect(() => {
        let total = 0;
        cart.forEach(product => {
            const price = product.price * product.quantity;
            total = total + price
        });
        setTotalPrice(total);
    })
    return (
        <section className='checkout-section'>
            <div className="half flex-column checkout-item-container">
                <h2>RESUMEN DE COMPRA</h2>
                <div>{cart.length === 0 ?
                    <h3>No hay nada en el carrito</h3> :
                    <div>
                        <ul>{cart.map(product => <CheckoutItem data={product} key={product.id} />)}</ul>
                        <h3 style={{ textAlign: "center" }}>Total ${totalPrice}</h3>
                    </div>}
                </div>
            </div>
            <div className="half flex-column checkout-form">
                <h2>DATOS DE COMPRA</h2>
                <form action="">
                    <div className="input">
                        <label htmlFor='name'>Nombre: </label>
                        <input type="text" id='name' name='name' placeholder='Escrbie tu nombre aquí' />
                    </div>
                    <div className="input">
                        <label htmlFor="last-name">Apellido: </label>
                        <input type="text" id='last-name' name='last-name' placeholder='Escribe tu apellido aquí' />
                    </div>
                    <div className="input">
                        <label htmlFor="phone">Teléfono: </label>
                        <input type="number" id='phone' name='phone' placeholder='Escribe tu teléfono aquí' />
                    </div>
                    <div className="input">
                        <label htmlFor="mail">Mail: </label>
                        <input type='email' id='mail' name='mail' placeholder='Escribe tu mail aquí' />
                    </div>
                    <div className="input">
                        <label htmlFor="repeat-mail">Repite tu mail: </label>
                        <input type="email" id='repeat-mail' name='repeat-mail' placeholder='Repite tu mail aquí' />
                    </div>
                    <button type='submit' className='button-center' disabled={cart.length === 0 ? true : false}>COMPRAR</button>
                </form>
            </div>
        </section>
    )
}
export default Cart;


// const data = {
//     title: "Producto 1",
//     description: "Este es el produto n°1",
//     price: 100,
//     quantity: 2
// }