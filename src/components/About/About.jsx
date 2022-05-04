import React from "react";
import {Col, Row, Image, Container} from 'react-bootstrap'
import totemExterior from '../../assets/TotemExterior.jpg'
import './About.css'

export default function About(){
    return(
        <Container fluid >
        <Row>
            <Col sm={6}>
                <div className='presentation'>
                    <h2>El Tottem de Muñiz</h2>
                    <h5>Tienda Oficial</h5>
                    <p>Somos una mediana empresa de la localidad de San Miguel, más específicamente ubicados en Av. Pte. Perón 333, Muñiz. Hacemos delivery a los vecinos desde hace más de 20 años. Adquirimos muchísima experiencia en la elaboración de nuestros productos. Somos reconocidos por nuestra calidad en Pizzas y Empanadas en la zona de San Miguel, Muñiz y alrededores. Además de estos productos estrella y los clásicos de la marca, hemos incorporado más opciones para que disfrute con sus seres queridos, brindándole un excelente servicio de delivery para que no tenga que moverse de su hogar, al mejor precio.</p>
                    <h5 className='titulo-horarios'>Horarios de Atención</h5>
                    <Row className='horarios'>
                        <Col>
                            <h6 className='days'>Domingos a Jueves:</h6>
                            <p>11:30 - 15:00</p>
                            <p>19:30 - 23:00</p>
                        </Col>
                        <Col>
                            <h6 className='days'>Viernes y Sábados</h6>
                            <p>11:30 - 15:00</p>
                            <p>19:30 - 23:30</p>
                        </Col>
                    </Row>
                </div>
            </Col>
            <Col className='col-imagen'>
                <Image src={totemExterior} fluid rounded></Image>
            </Col>
        </Row>
        <Row></Row>
        </Container>
    )
}