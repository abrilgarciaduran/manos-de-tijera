import React, { useState, useEffect } from 'react';
import { getFirestore } from '../../firebase';
import Loader from '../loader/loader.js'
import ItemList from './itemList.js';

function Products(props) {
    const [loading, setLoading] = useState(true)
    const [items, setItems] = useState([])
    useEffect(() => {
        const db = getFirestore();
        const itemCollection = db.collection('items');
        itemCollection.get().then((querySnapshot) => {
            if (querySnapshot.size === 0) {
                console.log('No results')
            }
            setItems(querySnapshot.docs.map(doc => doc.data()));
            console.log(items)
        }).catch((error) => {
            console.log(`Error searching items: ${error}`);
        }).finally(() => {
            setLoading(false)
        })
    }, [])
    return (
        <section className='products'>
            <h2>Productos</h2>
            <div className='product-container'>
                {loading ? <Loader /> : <ItemList data={items} />}
            </div>
        </section>
    )
}
export default Products;


const data = [{
    id: 1,
    title: "Producto 1",
    description: "Este es el produto n°1",
    price: 100,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT42bTFUkkmXvZsJAcxJJV5RjWPt3_xcaCAeQ&usqp=CAU"
},
{
    id: 2,
    title: "Producto 2",
    description: "Este es el produto n°2",
    price: 150,
    quantity: 2,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT42bTFUkkmXvZsJAcxJJV5RjWPt3_xcaCAeQ&usqp=CAU"
},
{
    id: 3,
    title: "Producto 3",
    description: "Este es el produto n°3",
    price: 200,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT42bTFUkkmXvZsJAcxJJV5RjWPt3_xcaCAeQ&usqp=CAU"
},
{
    id: 4,
    title: "Producto 4",
    description: "Este es el produto n°4",
    price: 100,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT42bTFUkkmXvZsJAcxJJV5RjWPt3_xcaCAeQ&usqp=CAU"
},
{
    id: 5,
    title: "Producto 5",
    description: "Este es el produto n°5",
    price: 150,
    quantity: 2,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT42bTFUkkmXvZsJAcxJJV5RjWPt3_xcaCAeQ&usqp=CAU"
},
{
    id: 6,
    title: "Producto 6",
    description: "Este es el produto n°6",
    price: 200,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT42bTFUkkmXvZsJAcxJJV5RjWPt3_xcaCAeQ&usqp=CAU"
}
]