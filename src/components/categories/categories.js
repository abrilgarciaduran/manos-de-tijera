import React from 'react';
import { useParams } from 'react-router-dom';
import '../home/home.css';
import ItemList from '../itemList/itemList.js';

function Categories(props) {
    const { categoryId } = useParams();
    return (
        <section className='categories'>
            <div className='products-categories'>
                <h2>{categoryId.toUpperCase().replace('-', ' ')}: </h2>
                <div className='product-container'>
                    <ItemList data={props.items.filter(element => element.category === categoryId)} />
                </div>
            </div>
        </section>
    )
}
export default Categories;


