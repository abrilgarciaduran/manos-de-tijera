import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { CartProvider } from './context/cartContext.js';
import './app.css';

//Pages
import NavBar from './components/navBar/navBar.js';
import Home from './components/home/home.js';
import Cart from './components/checkout/cart.js';
import Product from './components/itemDetail/product.js';
import Products from './components/itemList/products.js';
import Categories from './components/categories/categories.js';
import Faqs from './components/faqs/faqs.js';

function App() {
  const [items, setItems] = useState()
  useEffect(() => {
    setItems(data);
  }, []);
  return (
    <div className='App'>
      <Router>
        <NavBar />
        <Switch>
          <CartProvider>
            <Route exact path='/'>
              <Home title='TIENDA MANOS DE TIJERA' />
            </Route>
            <Route exact path='/products'>
              <Products />
            </Route>
            <Route exact path='/product/:productId'>
              <Product />
            </Route>
            <Route exact path='/categories/:categoryId'>
              <Categories />
            </Route>
            <Route exact path='/faqs'>
              <Faqs />
            </Route>
            <Route exact path='/cart'>
              <Cart />
            </Route>
          </CartProvider>
        </Switch>
      </Router>
    </div>
  );
}

export default App;


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