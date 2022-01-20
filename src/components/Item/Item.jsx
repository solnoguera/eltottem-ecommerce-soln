import React from 'react';
import { Button, Card } from 'react-bootstrap'
import './Item.css'

export default function Item({ item }) {

    const { title, price, description, image } = item

    return (
        <Card className='card'>
            <Card.Img variant="top" src={image}/>
            <Card.Body>
                <Card.Title className='padding'>{title}</Card.Title>
                <Card.Text className='padding'>
                    {price}
                    {description}
                </Card.Text>
                <Button variant="danger">Pedinos!</Button>
            </Card.Body>
        </Card>
    
    );
};

