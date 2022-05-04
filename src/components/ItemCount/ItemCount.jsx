import React, {useState} from 'react'
import {Button, ButtonGroup} from 'react-bootstrap'
import './ItemCount.css'

const ItemCount = ({initial, stock, onAdd}) => {

    const [counter, setCounter] = useState(initial)
    const [warning, setWarning] = useState(null)
 
    function sumar(){
        if(counter < stock){
            setCounter(counter + 1)
            setWarning(null)
        } else if(counter === stock){
            setWarning('Has alcanzado el límite de stock!')
        }
    }

    function restar(){
        if(counter > initial){
            setCounter(counter - 1)
            setWarning(null)
        } else {
            setWarning('No se puede pedir menos de 1 producto.')
        }
    }

    return (
        <div>
            <div className='card'>
                    <ButtonGroup className='delineado ancho-counter'>
                        <Button variant="light" onClick={restar}>-</Button>
                        <Button className='counter' variant="light">{counter}</Button>
                        <Button variant="light" onClick={sumar}>+</Button>
                    </ButtonGroup>
                    <Button className='add-to-cart' variant='danger' 
                            onClick={()=>onAdd(counter)}>Agregar al carrito</Button>
            </div>
            {warning && <p style={{color:"red"}}>{warning}</p>}
        </div>
    )
}

export default ItemCount
