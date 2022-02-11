import React from "react";
import { Nav, Navbar, Container } from "react-bootstrap";
import { NavLink } from 'react-router-dom';
import NavDropDown from "../NavDropDown/NavDropDown"
import CartWidget from "../CartWidget/CartWidget";
import logo from "../../assets/tottemlogo.png";
import categories from "../../data/categories.json"
import './NavBar.css'




export default function NavBar() {

  return (
    <Navbar variant="light" expand="lg" className='nav'>
      
      <Container>

          <NavLink to={'/'} className='normalizeBlackLink'> 
            <img src={logo} alt="logo"  width="115px" height="60px" />
          </NavLink>

          <NavLink to={'/'} className='normalizeBlackLink'> 
            <Navbar.Brand className='titulo'>Tienda</Navbar.Brand>
          </NavLink>

        <CartWidget/>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto letra" navbarScroll>

            <Nav.Link>
              <NavLink to={'/'} className='normalizeBlackLink'> 
                Home
              </NavLink>
            </Nav.Link>

            <Nav.Link>
              <NavLink to={'/about'} className='normalizeBlackLink'> 
                Nosotros
              </NavLink>
            </Nav.Link>
            
            <NavDropDown title='Productos' categories={categories} />
          </Nav>
        </Navbar.Collapse>
        
      </Container>
    </Navbar>
  );
}
