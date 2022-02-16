import React from 'react';
import { Button, Card } from 'react-bootstrap'
import { NavLink } from 'react-router-dom';
import iconDefault from '../../assets/defaultIMG.png'
import './Item.css'

export default function Item({ item }) {

    const { id, title, price, description, image} = item

    return (
        <NavLink to={`/item/${id}`} className='normalizeItem'> 
            <Card className='producto'>
                <Card.Img variant="top" src={image || iconDefault}/>
                <Card.Body>
                    <Card.Title className='padding'>{title}</Card.Title>
                    <Card.Text className='padding'> 
                        <p className='description'>
                            {description}
                        </p>
                        ${price}
                    </Card.Text>
                    <Button variant="danger" className='boton'>
                            Pedinos!
                    </Button>
                </Card.Body>
            </Card>
        </NavLink>
    );
};

