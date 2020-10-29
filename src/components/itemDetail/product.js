import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from './itemDetail.js';
import Loader from '../loader/loader.js';
import './itemDetail.css';

function Product(props) {
    const { productId } = useParams();
    const [product, setProduct] = useState({});
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        setTimeout(() => {
            setLoading(true)
            setProduct(data[productId - 1]);
            setLoading(false);
        }, 2000)
    }, [productId])
    return (
        <div>
            {loading ? <Loader /> : <ItemDetail item={product} />}
        </div>
    )
}

export default Product;





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