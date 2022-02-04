import React, { useContext, useState } from 'react';
import { Col, Row, Image, Container } from 'react-bootstrap';
import ItemCount from './../ItemCount/ItemCount'
import GoToCart from '../GoToCart/GoToCart';
import iconDefault from '../../assets/defaultIMG.png'
import './ItemDetail.css'
import { context } from '../../context/CartProvider';

export default function ItemDetail({ item }) {

    const {addToCart} = useContext(context)

    const { title, price, description, image, initial, stock } = item

    const [added, setAdded] = useState(undefined)

    function onAdd(counter){
        console.log(`Agregaste ${item.title}, cantidad: ${counter}.`);
        addToCart(item, counter)
        setAdded(counter)
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
                    
                    {
                        (!added)?
                        <ItemCount className='margin' initial={initial} stock={stock} onAdd={onAdd}/>
                        :
                        <GoToCart cantidad={added}/>
                    }
                    
                    
                </Col>

            </Row>

        </Container>
    );
};
