import React from "react";
import { Nav, Navbar, Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import NavDropDown from "../NavDropDown/NavDropDown";
import CartWidget from "../CartWidget/CartWidget";
import useFirestoreCollection from "../../hooks/useFirestoreCollection";
import logo from "../../assets/tottemlogo.png";
import "./NavBar.css";

export default function NavBar() {
  const { collection, loading, error } = useFirestoreCollection("categories");

  return (
    <div>
      {
        !error && !loading && 
        
        <Navbar variant="light" expand="lg" className="nav">
          <Container>
            <NavLink to={"/"} className="normalizeBlackLink">
              <img src={logo} alt="logo" width="115px" height="65px" />
            </NavLink>

            <NavLink to={"/"} className="normalizeBlackLink">
              <Navbar.Brand className="titulo">Tienda</Navbar.Brand>
            </NavLink>

            <CartWidget />

            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto letra" navbarScroll>
                <Nav.Link>
                  <NavLink to={"/"} className="normalizeBlackLink">
                    Home
                  </NavLink>
                </Nav.Link>

                <Nav.Link>
                  <NavLink to={"/about"} className="normalizeBlackLink">
                    Nosotros
                  </NavLink>
                </Nav.Link>

                <NavDropDown title="Categorías" categories={collection} />
                
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      }
    </div>
  );
}
