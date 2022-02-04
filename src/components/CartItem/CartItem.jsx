import React, {useContext} from 'react';
import {Button, ButtonGroup} from 'react-bootstrap'
import { context } from '../../context/CartProvider';
import './CartItem.css'

export default function CartItem({product, quantity}) {
  
    const {deleteFromCart, oneItemMore, oneItemLess} = useContext(context)

  return (
    <div className='item'>
        <h4>{product.title}</h4>
        <p>Cantidad: {quantity}</p>
        <ButtonGroup>
          <Button variant='danger' onClick={()=>oneItemLess(product.id)}> - </Button>
          <Button variant='danger' onClick={()=>oneItemMore(product.id)}> + </Button>
        </ButtonGroup>
        <Button variant='danger' onClick={()=>deleteFromCart(product.id)} style={{marginLeft:'20px'}}>
          Eliminar
        </Button>
    </div>
  );
};
