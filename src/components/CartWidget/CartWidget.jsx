import React, {useContext} from "react"
import { NavLink } from "react-router-dom"
import carrito from "../../assets/carrito.png"
import './CartWidget.css'
import { context } from "../../context/CartProvider"

export default function CartWidget(){

    const {total} = useContext(context)
    

    return (
        <div className='cart'>
            <NavLink to={'/cart'} className='normalizeBlackLink'> 
                <img src={carrito} alt="carrito" width="35px" height="35px" />
                <span className='number'>{total}</span>
            </NavLink>
        </div>
    )
}