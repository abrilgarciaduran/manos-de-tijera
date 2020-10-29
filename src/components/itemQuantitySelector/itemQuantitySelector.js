import React from 'react';
import CounterButton from './counterButton.js';
import CounterInput from './counterInput.js';
import './itemQuantitySelector.css'

function ItemQuantitySelector(props) {
    return (
        <div id='item-quantity-selector'>
            <CounterButton symbol='-' onClick={props.handleSub} />
            <CounterInput onChange={props.handleChange} count={props.count} />
            <CounterButton symbol='+' onClick={props.handleAdd} />
        </div>
    )
}
export default ItemQuantitySelector;









// class ItemQuantitySelector extends Component {
//     constructor() {
//         super();
//         this.state = {
//             count: 0
//         };
//         this.handleChange = this.handleChange.bind(this);
//         this.minCounter = 0;
//         this.maxCounter = 10;
//     }
//     handleAdd = () => {
//         if (this.state.count < this.maxCounter) {
//             console.log('Agregando');
//             this.setState((state) => ({
//                 count: state.count + 1
//             }));
//         } else {
//             alert('Has llegado a la cantidad maxima')
//         }
//     }
//     handleSub = () => {
//         if (this.state.count > this.minCounter) {
//             console.log('Quitando');
//             this.setState((state) => ({
//                 count: state.count - 1
//             }));
//         } else {
//             alert('Has llegado a la cantidad minima')
//         }
//     }
//     handleChange = (event) => {
//         this.setState({
//             count: event.target.value
//         });
//     }
//     render() {
//         return (
//             <div id='item-quantity-selector'>
//                 <CounterButton symbol='-' onClick={this.handleSub} />
//                 <CounterInput onChange={this.handleChange} count={this.state.count} />
//                 <CounterButton symbol='+' onClick={this.handleAdd} />
//             </div>
//         )
//     }
// }