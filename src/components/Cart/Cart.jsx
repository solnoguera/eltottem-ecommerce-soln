import React, {useContext} from 'react';
import { context } from '../../context/CartProvider';
import CartItem from '../CartItem/CartItem';
import {Button} from 'react-bootstrap'
import { NavLink } from 'react-router-dom';

export default function Cart() {
  
  const {cart, cleanCart, totalPrice} = useContext(context)

  return (
    <div>
      {
        (cart.length === 0) ?
          <div style={{margin:'4%', textAlign:'center'}}>
            <h2>Ups! Parece que tu carrito esta vacío</h2>
            <br/>
            <NavLink to={'/'} style={{color:'black'}}>Ir a comprar</NavLink>
          </div>
          :
          <>
            <h2 style={{margin:'2%'}}>Tu Carrito</h2> 
            {
              cart.map(item => <CartItem product={item.product} price={item.product.price} quantity={item.quantity} key={item.product.id}/>)
            }
            
            <Button variant='danger' onClick={()=>cleanCart()} style={{margin:'2%'}}>
              Vaciar Carrito
            </Button>
            <h3 style={{margin:'2%'}}>Total: ${totalPrice()}</h3>
          </>
      }
      

    </div>
    );
};

