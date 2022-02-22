import { BrowserRouter, Switch, Route} from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Cart from './components/Cart/Cart'
import CartProvider from './context/CartProvider';
import CheckOut from './components/CheckOut/CheckOut'
import Slider from './components/Slider/Slider';
import About from './components/About/About';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <CartProvider>
        <BrowserRouter> 
          <NavBar />
          <Switch>
            <Route exact path='/'>
              <Slider />
              <ItemListContainer greeting="Disfrutá de la calidad de nuestros productos!" />
              <Footer />
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
