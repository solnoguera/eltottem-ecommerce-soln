import React from "react";
import { Spinner } from "react-bootstrap";
import './Loading.css'

export default function Cargando(){
    return (
        <div className='divPadre'>
            <div className='divHijo'>
                <Spinner className='spinner' animation="border" variant="danger" />
            </div>
        </div>
    )
}