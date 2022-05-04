import React, {useContext} from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import {Button, ButtonGroup} from 'react-bootstrap'
import { context } from '../../context/CartProvider';
import iconDefault from '../../assets/defaultIMG.png'
import './CartItem.css'

export default function CartItem({product, quantity}) {
  
    const {deleteFromCart, oneItemMore, oneItemLess} = useContext(context)

  return (
    <Container>      
        <Row className='item'>
          <Col sm={6} className='img'>
            <Image src={product.image || iconDefault} alt="producto" fluid rounded/>
          </Col>
          <Col>
          <div>
            <h4>{product.title}</h4>
            <p>${product.price} - Cantidad: {quantity}</p>
            <div >
              <ButtonGroup className='boton'>
                <Button variant='danger' onClick={()=>oneItemLess(product.id)}> - </Button>
                <Button variant='danger' onClick={()=>oneItemMore(product.id)}> + </Button>
              </ButtonGroup>
              
              <Button variant='danger' onClick={()=>deleteFromCart(product.id)} className='boton'>
                Eliminar
              </Button>
            </div>
          </div>
          </Col>
        </Row>
    </Container>
  );
};
