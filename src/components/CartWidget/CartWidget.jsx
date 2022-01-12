import carrito from "../../assets/carrito.png"

export default function CartWidget(){
    return (
        <>
            <img src={carrito} alt="carrito" width="5%" height="5%" style={{ marginRight:15 }} />
            <b style={{ color:"black" }}>0</b>
        </>
    )
}