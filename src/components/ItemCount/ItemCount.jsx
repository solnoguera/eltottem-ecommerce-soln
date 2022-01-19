import React, {useState} from 'react'
import {Button, ButtonGroup} from 'react-bootstrap'
import swall from "sweetalert"
import {Card} from 'react-materialize'
import './ItemCount.css'

const ItemCount = ({initial, stock}) => {

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

    function onAdd(){
        swall(`Se han agregado correctamente 
            ${counter} items al carrito`)
    }

    return (
        <Card className='card' 
        closeIcon={<></>}>
                <ButtonGroup className='delineado ancho-counter'>
                    <Button variant="light" onClick={restar}>-</Button>
                    <Button className='counter' variant="light">{counter}</Button>
                    <Button variant="light" onClick={sumar}>+</Button>
                </ButtonGroup>
                <Button className='add-to-cart' variant='danger' 
                        onClick={onAdd}>Agregar al carrito</Button>
        </Card>
    )
}

export default ItemCount
