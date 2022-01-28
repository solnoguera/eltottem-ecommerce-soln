import {NavDropdown} from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import './NavDropDown.css'

export default function NavDropDown ({title, categories}){
    return (
        <NavDropdown title={title} id="basic-nav-dropdown" className='normalizeBlackLink'>
            {
                categories.map( category =>
                    <>
                        {/**
                         * Excepcion href *
                         * El unico motivo para poner este href es porque el NavLink no funciona
                         * al englobar a NavDropdown.Item, por lo que sin el href, no puede
                         * redirigir a la categoria a menos que se clickee EXACTAMENTE en 
                         * el nombre de esta, lo que puede parecer que no esta redirigiendo 
                         * correctamente al tocar DENTRO del boton pero fuera del nombre.
                         */}
                        <NavDropdown.Item href={'/category'+category.link}>

                            <NavLink to={'/category'+category.link} className='categoria'>
                                {category.name}
                            </NavLink>

                        </NavDropdown.Item>
                        
                        <NavDropdown.Divider />
                        
                    </>
                )
            }
        </NavDropdown>
    )
}