import React from "react";
import { Col, Row, Image } from "react-bootstrap";
import logo from '../../assets/tottemlogo.png'
import phone from '../../assets/phone.png'
import location from '../../assets/location.png'
import './Footer.css'

export default function Footer(){
    return(
            <Row className='footer-container'>
                <Col sm={6} className='col-img'>
                    <Image src={logo} fluid rounded></Image>
                </Col>

                <Col sm={6} className='col-info'>
                    <h4>Contactanos</h4>
                    <img src={location} alt="celular" width='30px' height='30px' />
                    <span>Av. Presidente Perón 333, Muñiz, San Miguel, Bs. As.</span>
                    <br />
                    <img src={phone} alt="celular" width='35px' height='35px' />
                    <span>1132479932</span>
                    <br />
                    <img src={phone} alt="celular" width='35px' height='35px' />
                    <span>4667-5050</span>
                    <br />
                    <img src={phone} alt="celular" width='35px' height='35px' />
                    <span>4667-4700</span>
                </Col>
                <h5 className='rights'>All Rights Reserved. © 2022 <span>El Totem Muñiz</span></h5>
            </Row>

    )
}