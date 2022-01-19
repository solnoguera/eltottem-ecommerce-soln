import React from "react";
import { Nav, Navbar, Container } from "react-bootstrap";
import logo from "../../assets/tottemlogo.png";
import './NavBar.css'
import NavDropDown from "../NavDropDown/NavDropDown"
import CartWidget from "../CartWidget/CartWidget";

export default function NavBar() {

  const items = [
    { name : 'Promociones', link : '/promociones'},
    { name : 'Pizzas', link : '/pizzas'},
    { name : 'Empanadas', link : '/empanadas'},
    { name : 'Empanadas Premium', link : '/empanadas-premium'},
    { name : 'Tartas', link : '/tartas'},
    { name : 'Sandwiches', link : '/sandwiches'},
    { name : 'Hamburguesas', link : '/hamburguesas'},
    { name : 'Minutas', link : '/minutas'},
    { name : 'Bebidas', link : '/bebidas'}
  ]

  return (
    <Navbar variant="light" expand="lg" className='fondoRojo' >
      <Container>
      <img src={logo} alt="logo" width="12%" height="10%" style={{ marginRight:25 }} />
        <Navbar.Brand className='letra'> Tienda Online El Tottem</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto letra" navbarScroll>
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="/nosotros">Nosotros</Nav.Link>
            
            <NavDropDown title='Productos' items={items} />

            <Nav.Link href="/contacto">Contactanos</Nav.Link>
          </Nav>
        </Navbar.Collapse>

        <CartWidget />
        
      </Container>
    </Navbar>
  );
}
