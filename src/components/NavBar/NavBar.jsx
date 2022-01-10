import React from "react";
import {
  Nav,
  Navbar,
  Container,
  NavDropdown
} from "react-bootstrap";
import logo from "../../assets/tottemlogo.png";
import './NavBar.css'

export default function NavBar() {
  return (
    <Navbar variant="light" expand="lg" className='fondoRojo' >
      <Container>
      <img src={logo} alt="logo" width="10%" height="15%" style={{ marginRight:25 }} />
        <Navbar.Brand> Tienda Online El Tottem</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto" navbarScroll>
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="/nosotros">Nosotros</Nav.Link>
            <NavDropdown title="Productos" id="basic-nav-dropdown">
              <NavDropdown.Item href="/promociones">Promociones</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/pizzas">Pizzas</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/empanadas">Empanadas</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/empanadas-premium">Empanadas Premium</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/tartas">Tartas</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/sandwiches">Sandwiches</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/hamburguesas">Hamburguesas</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/minutas">Minutas</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/bebidas">Bebidas</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/contacto">Contactanos</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
