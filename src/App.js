import React from 'react';
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Cart from './components/Cart/Cart'
import CartProvider from './context/CartProvider';
import CheckOut from './components/CheckOut/CheckOut'
import About from './components/About/About';
import Home from './components/Home/Home';

function App() {
  
  return (
    <div className="App">
      <CartProvider>
        <BrowserRouter> 
          <NavBar />
          <Switch>
            <Route exact path='/'>
              <Home greeting="Disfrutá de la calidad de nuestros productos!"/>
            </Route>
            <Route path='/category/:categoryName'>
              <ItemListContainer greeting="Bienvenido a El Tottem!" />
            </Route>
            <Route path='/item/:itemId'>
              <ItemDetailContainer />
            </Route>
            <Route exact path='/cart'>
              <Cart />
            </Route>
            <Route exact path='/checkout'>
              <CheckOut />
            </Route>
            <Route exact path='/about'>
              <About />
            </Route>
          </Switch>
        </BrowserRouter>
      </CartProvider>
    </div>
  );
}

export default App;
