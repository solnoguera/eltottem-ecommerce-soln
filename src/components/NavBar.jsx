import React from 'react';
import {
    NavItem, 
    NavLink, 
    Nav, 
    Collapse, 
    NavbarToggler, 
    NavbarBrand, 
    Navbar,
    UncontrolledDropdown, 
    DropdownToggle,
    DropdownMenu,
    DropdownItem
} from 'reactstrap'
import logo from '../assets/eltottemlogo.png'

export default function NavBar (){
    return (
        <div>
        
        <Navbar
            color="danger"
            dark
            expand="md"
            light
        >
            <img src={logo} alt="logo" width="3%" height="5%" style={{ marginRight:15 }} />
            <NavbarBrand href="/">
              El Tottem Pizzería
            </NavbarBrand>
            <NavbarToggler/>
            <Collapse navbar>
            <Nav
                className="me-auto"
                navbar
            >
                <NavItem>
                    <NavLink href="/">
                        Home
                    </NavLink>
                </NavItem>

                <NavItem>
                    <NavLink href="/about">
                        Nosotros
                    </NavLink>
                </NavItem>

                <NavItem>
                    <NavLink href="/promos">
                        Promociones
                    </NavLink>
                </NavItem>

                <UncontrolledDropdown inNavbar nav >
                <DropdownToggle caret nav >
                    Productos
                </DropdownToggle>
                <DropdownMenu right>
                    <DropdownItem> Pizzas </DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem> Pizzas Rellenas </DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem> Empanadas </DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem> Empanadas Premium</DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem> Tartas </DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem> Sandwiches </DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem> Minutas </DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem> Bebidas </DropdownItem>
                </DropdownMenu>
                </UncontrolledDropdown>
                <NavItem>
                    <NavLink href="/contacto">
                        Contactanos
                    </NavLink>
                </NavItem>
            </Nav>
            </Collapse>
        </Navbar>
        </div>
    )
}

