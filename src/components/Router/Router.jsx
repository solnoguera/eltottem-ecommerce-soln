import React from 'react'
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import NavBar from '../NavBar/NavBar';
import ItemListContainer from '../ItemListContainer/ItemListContainer';
import ItemDetailContainer from '../ItemDetailContainer/ItemDetailContainer';
import Cart from '../Cart/Cart'
import CheckOut from '../CheckOut/CheckOut'
import Slider from '../Slider/Slider';
import About from '../About/About';
import Footer from '../Footer/Footer';
import routes from '../../routes'

export default function Router() {
  return (
    <BrowserRouter> 
        <NavBar />
        <Switch>
        <Route exact path={routes.main}>
            <Slider />
            <ItemListContainer greeting="Disfrutá de la calidad de nuestros productos!" />
            <Footer />
        </Route>
        <Route path={routes.category}>
            <ItemListContainer greeting="Bienvenido a El Tottem!" />
        </Route>
        <Route path={routes.item}>
            <ItemDetailContainer />
        </Route>
        <Route exact path={routes.cart}>
            <Cart />
        </Route>
        <Route exact path={routes.checkout}>
            <CheckOut />
        </Route>
        <Route exact path={routes.about}>
            <About />
        </Route>
        </Switch>
    </BrowserRouter>
  )
}
