import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getFirestore } from '../../firebase';
import ItemList from '../itemList/itemList.js';
import '../home/home.css';

function Categories() {
    const [items, setItems] = useState([])
    const { categoryId } = useParams();
    useEffect(() => {
        const db = getFirestore();
        const itemCollection = db.collection('items');
        itemCollection.get().then((queySnapshot) => {
            if (queySnapshot.size === 0) {
                console.log('No results')
            }
            setItems(queySnapshot.docs.map(doc => doc.data()));
        }).catch((error) => {
            console.log(`Error searching items: ${error}`);
        })
    })
    return (
        <section className='categories'>
            <div className='products-categories'>
                <h2>{categoryId.toUpperCase().replace('-', ' ')}: </h2>
                <div className='product-container'>
                    <ItemList data={items.filter(element => element.category === categoryId)} />
                </div>
            </div>
        </section>
    )
}
export default Categories;


