import React, {useState} from 'react'
import swall from "sweetalert"
import {Button, ButtonGroup} from 'react-bootstrap'
import './ItemCount.css'

const ItemCount = ({initial, stock, onAdd}) => {

    const [counter, setCounter] = useState(initial)

    function sumar(){
        if(counter < stock){
            setCounter(counter + 1)
        } else if(counter === stock){
            swall('Ups! Has alcanzado el límite de stock!')
        }
    }

    function restar(){
        if(counter > initial){
            setCounter(counter - 1)
        }
    }

    return (
        <div className='card'>
                <ButtonGroup className='delineado ancho-counter'>
                    <Button variant="light" onClick={restar}>-</Button>
                    <Button className='counter' variant="light">{counter}</Button>
                    <Button variant="light" onClick={sumar}>+</Button>
                </ButtonGroup>
                <Button className='add-to-cart' variant='danger' 
                        onClick={()=>onAdd(counter)}>Agregar al carrito</Button>
        </div>
    )
}

export default ItemCount
