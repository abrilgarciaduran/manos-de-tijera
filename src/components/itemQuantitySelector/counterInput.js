import React from 'react';

function CounterInput(props) {
    return (
        <input readOnly type='text' onChange={props.handleChange} value={props.count} className='counter-input' />
    )
}

export default CounterInput;