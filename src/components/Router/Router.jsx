import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import ItemListContainer from "../ItemListContainer/ItemListContainer";
import ItemDetailContainer from "../ItemDetailContainer/ItemDetailContainer";
import Cart from "../Cart/Cart";
import CheckOut from "../CheckOut/CheckOut";
import Slider from "../Slider/Slider";
import About from "../About/About";
import Footer from "../Footer/Footer";
import routes from "../../routes";
import Auth from "../Auth/Auth";

export default function Router() {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route exact path={routes.main}>
          <Slider />
          <ItemListContainer greeting="Te damos la bienvenida a la Tienda Online El Tottem Muñiz!" />
          <Footer />
        </Route>
        <Route path={routes.category}>
          <ItemListContainer greeting="Disfrutá de la calidad de nuestros productos!" />
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
        <Route exact path={routes.auth}>
          <Auth />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
