import carrito from "../../assets/carrito.png"
import './CartWidget.css'

export default function CartWidget(){
    return (
        <div className='cart'>
            <img src={carrito} alt="carrito" width="35px" height="35px" />
            <span style={{fontSize : '16px'}}>0</span>
        </div>
    )
}