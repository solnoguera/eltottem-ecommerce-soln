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

export default function NavBar (){
    return (
        <div>
        <Navbar
            color="danger"
            dark
            expand="md"
            light
        >
            <NavbarBrand href="/">
            El Tottem Pizzeria
            </NavbarBrand>
            <NavbarToggler/>
            <Collapse navbar>
            <Nav
                className="me-auto"
                navbar
            >
                <NavItem>
                    <NavLink href="/about">
                        Nosotros
                    </NavLink>
                </NavItem>

                <NavItem>
                    <NavLink href="/promos">
                        Promos
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
                    <DropdownItem> Tartas </DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem> Sandwiches </DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem> Contactanos </DropdownItem>
                    <DropdownItem divider />
                </DropdownMenu>
                </UncontrolledDropdown>
            </Nav>
            </Collapse>
        </Navbar>
        </div>
    )
}

