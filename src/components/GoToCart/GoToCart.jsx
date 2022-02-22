import React from 'react';
import { NavLink } from 'react-router-dom';
import { Button } from 'react-bootstrap'
import './GoToCart.css'

export default function GoToCart ({cantidad}) {
  return (
        <div className='container-checkout'>
                <h5>
                    { (cantidad === 1)   ? 
                    `Listo! Ya agregaste tu producto al carrito.`
                    : 
                    `Listo! Ya agregaste tus ${cantidad} productos al carrito.`}
                    
                </h5>
                <div className='buttons'>
                    <NavLink to={'/cart'}>
                        <Button className='go-to-cart' variant='danger'>
                            Ir al Carrito 
                        </Button>
                    </NavLink>

                    <NavLink className='keep-buying' to={'/'}>
                            Seguir Comprando
                    </NavLink>
                </div>
        </div>
    );
};
