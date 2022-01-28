import React from 'react';
import swall from "sweetalert"
import { Col, Row, Image, Container } from 'react-bootstrap';
import ItemCount from './../ItemCount/ItemCount'
import iconDefault from '../../assets/defaultIMG.png'
import './ItemDetail.css'

export default function ItemDetail({ item }) {

    const { title, price, description, image, initial, stock } = item

    function onAdd(counter){
        swall(`Se han agregado correctamente 
            ${counter} items al carrito`)
    }

    return (
        <Container fluid style={{display:'grid'}}>

            <Row className='row'>

                <Col className='col-imagen' sm={6}>
                    <Image src={image || iconDefault} fluid rounded></Image>
                </Col>

                <Col className='col-details'>
                    <h2 className='margin'>{title}</h2>
                    <h3 className='margin'>${price}</h3>
                    {
                        (description)?
                        <p className='margin'>{description}</p>
                        :
                        <></>
                    }
                    
                    
                    <ItemCount className='margin' initial={initial} stock={stock} onAdd={onAdd}/>
                </Col>

            </Row>

        </Container>
    );
};
