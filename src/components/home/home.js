import React, { useEffect, useState } from 'react';
import logo from '../../assets/logo.png';
import './home.css';
import ItemList from '../itemList/itemList.js';

function Home(props) {
    const [items, setItems] = useState([])
    useEffect(() => {
        setTimeout(() => {
            setItems(data)
        }, 1000)
    }, [])
    return (
        <section className='home'>
            <div className='home-banner'>
                <h1>{props.title}</h1>
                <img src={logo} alt="Logo Manos de Tijera" className='img-large' />
            </div>
            <div className='products-preview'>
                <h2>Productos más vendidos: </h2>
                <div className='product-container'>
                    <ItemList data={items} />
                </div>
            </div>
        </section>
    )
}
export default Home;



const data = [{
    id: 1,
    title: "Producto 1",
    description: "Este es el produto n°1",
    price: 100,
    category: 'shampoo-matizador',
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT42bTFUkkmXvZsJAcxJJV5RjWPt3_xcaCAeQ&usqp=CAU"
},
{
    id: 2,
    title: "Producto 2",
    description: "Este es el produto n°2",
    price: 150,
    category: 'shampoo-matizador',
    quantity: 2,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT42bTFUkkmXvZsJAcxJJV5RjWPt3_xcaCAeQ&usqp=CAU"
},
{
    id: 3,
    title: "Producto 3",
    description: "Este es el produto n°3",
    price: 200,
    category: 'shampoo-matizador',
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT42bTFUkkmXvZsJAcxJJV5RjWPt3_xcaCAeQ&usqp=CAU"
},
{
    id: 4,
    title: "Producto 4",
    description: "Este es el produto n°4",
    price: 100,
    category: 'tintura-fantasia',
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT42bTFUkkmXvZsJAcxJJV5RjWPt3_xcaCAeQ&usqp=CAU"
},
{
    id: 5,
    title: "Producto 5",
    description: "Este es el produto n°5",
    price: 150,
    category: 'tintura-fantasia',
    quantity: 2,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT42bTFUkkmXvZsJAcxJJV5RjWPt3_xcaCAeQ&usqp=CAU"
},
{
    id: 6,
    title: "Producto 6",
    description: "Este es el produto n°6",
    price: 200,
    category: 'tintura-fantasia',
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT42bTFUkkmXvZsJAcxJJV5RjWPt3_xcaCAeQ&usqp=CAU"
}
]

