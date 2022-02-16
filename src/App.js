import { BrowserRouter, Switch, Route} from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Cart from './components/Cart/Cart'
import CartProvider from './context/CartProvider';
import CheckOut from './components/CheckOut/CheckOut'

function App() {
  return (
    <div className="App">
      <CartProvider>
        <BrowserRouter> 
          <NavBar />
          <Switch>
            <Route exact path='/'>
              <ItemListContainer greeting="Bienvenido a El Tottem!" />
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
          </Switch>
        </BrowserRouter>
      </CartProvider>
    </div>
  );
}

export default App;
