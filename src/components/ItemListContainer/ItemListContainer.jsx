import "./ItemListContainer.css"
import ItemCount from "../ItemCount/ItemCount"

export default function ItemListContainer ({greeting}) {
    return(
        <>
            <h5 className="itemList" >{greeting}</h5>
            <ItemCount initial={1} stock={5} />
        </>
    )
}