import carrito from "../../assets/carrito.png"

export default function CartWidget(){
    return (
        <>
            <img src={carrito} alt="carrito" width="6%" height="6%" style={{ marginRight:15 }} />
            <b style={{ color:"black" }}>0</b>
        </>
    )
}