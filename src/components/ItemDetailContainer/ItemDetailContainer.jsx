import React, {useEffect, useState} from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import Loading from '../Loading/Loading';
import data from './../../data/products.json'

export default function ItemDetailContainer() {

    const traerProducto = async () =>{
        
        setTimeout(()=>{
            //Muestro solo el primer producto para la entrega del desafio 7
            const primerProducto = data[0]
            setProducto(primerProducto)
        },2000)
    }

    const [producto, setProducto] = useState({})

    useEffect( ()=> {
        traerProducto()
    }, [])

    return (
        <div>
            {
                (producto.id) ?
                
                <ItemDetail item={producto}/>
                :
                <Loading />
            }
            
        </div>
  );
};

