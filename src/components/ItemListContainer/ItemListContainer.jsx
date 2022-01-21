import React, {useEffect, useState} from "react"
import "./ItemListContainer.css"
import Loading from "../Loading/Loading"
import ItemList from "../ItemList/ItemList"
import data from './../../data/products.json'

export default function ItemListContainer ({greeting}) {

    const traerProductos = async () =>{
        
        setTimeout(()=>{
            setProductos(data)
        },2000)
    }

    const [productos, setProductos] = useState([])

    useEffect( ()=> {
        traerProductos()
    }, [])

    return(
        <div>
            {
                (productos.length > 0) ? 
                    <>
                        <h3 className='greeting'>{greeting}</h3>
                        <ItemList products={productos} />
                    </>
                :
                    <Loading />
            }
        </div>
    )
}