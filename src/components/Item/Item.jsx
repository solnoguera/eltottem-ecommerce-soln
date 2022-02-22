import React from 'react';
import { Button, Card } from 'react-bootstrap'
import { NavLink } from 'react-router-dom';
import iconDefault from '../../assets/defaultIMG.png'
import './Item.css'

export default function Item({ item }) {

    const { id, title, price, description, image, stock} = item
    const link = (stock === 0) ? '/' : `/item/${id}`

    return (
        <NavLink to={link} className='normalizeItem'> 
            <Card className='producto'>
                <Card.Img variant="top" src={image || iconDefault}/>
                <Card.Body className='cardContent'>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text> 
                        <p className='description'>
                            {description}
                        </p>
                        ${price}
                    </Card.Text>
                    <Button variant="danger" className='botonPedir'>
                        {stock === 0 ? 'Sin Stock' : 'Pedinos!'}
                    </Button>
                </Card.Body>
            </Card>
        </NavLink>
    );
};

