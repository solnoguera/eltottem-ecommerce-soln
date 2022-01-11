import {NavDropdown} from 'react-bootstrap'

export default function NavDropDown ({title, items}){
    return (
        <NavDropdown title={title} id="basic-nav-dropdown">
            {
                items.map( item =>
                    <>
                    <NavDropdown.Item href={item.link}>{item.name}</NavDropdown.Item>
                    <NavDropdown.Divider />
                    </>
                )
            }
        </NavDropdown>
    )
}