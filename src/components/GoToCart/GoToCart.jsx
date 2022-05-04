import React from 'react';
import { NavLink } from 'react-router-dom';
import { Button } from 'react-bootstrap'
import './GoToCart.css'

export default function GoToCart ({cantidad}) {
  return (
        <div className='go-to-cart'>
                <p>
                    { (cantidad === 1)   ? 
                    `Ya agregaste tu producto al carrito.`
                    : 
                    `Ya agregaste tus ${cantidad} productos al carrito.`}
                    
                </p>
                <div className='buttons'>
                    <NavLink to={'/cart'}>
                        <Button className='go-to-cart-button' variant='danger'>
                            Ver Carrito 
                        </Button>
                    </NavLink>

                    <NavLink className='keep-buying' to={'/'}>
                            Seguir Comprando
                    </NavLink>
                </div>
        </div>
    );
};
