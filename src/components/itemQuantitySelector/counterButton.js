import React from 'react';

function CounterButton(props) {
    return (
        <button onClick={props.onClick} className='counter-button'>{props.symbol}</button>
    )
}

export default CounterButton;