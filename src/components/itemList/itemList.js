import React from 'react';
import Item from './item.js';

function ItemList(props) {
    return (
        <ul className='item-list'>
            {props.data.map(product => {
                return <Item key={product.id} product={product} />
            })}
        </ul>
    )
}
export default ItemList;