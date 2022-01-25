import React from 'react';
import { Col, Row, Image, Container } from 'react-bootstrap';
import ItemCount from './../ItemCount/ItemCount'
import './ItemDetail.css'


export default function ItemDetail({ item }) {

    const { title, price, description, image, initial, stock } = item

    return (
        <Container fluid style={{display:'grid'}}>

            <Row className='row'>

                <Col className='col-imagen' sm={6}>
                    <Image src={image} fluid rounded></Image>
                </Col>

                <Col className='col-details'>
                    <h2 className='margin'>{title}</h2>
                    <h3 className='margin'>${price}</h3>
                    <p className='margin'>{description}</p>
                    
                    <ItemCount className='margin' initial={initial} stock={stock}/>
                </Col>

            </Row>

        </Container>
    );
};
