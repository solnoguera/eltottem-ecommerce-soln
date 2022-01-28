import { NavLink } from "react-router-dom"
import carrito from "../../assets/carrito.png"
import './CartWidget.css'

export default function CartWidget(){
    return (
        <div className='cart'>
            <NavLink to={'/cart'} className='normalizeBlackLink'> 
                <img src={carrito} alt="carrito" width="35px" height="35px" />
                <span className='number'>0</span>
            </NavLink>
        </div>
    )
}