import React, {useRef, useState, useContext} from 'react';
import firebase from "firebase";
import {Button} from 'react-bootstrap'
import { getFirestore } from '../../firebase/Firebase';
import { context } from '../../context/CartProvider';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import './CheckOut.css'

export default function CheckOut() {
    const [orderId, setOrderId] = useState('');
    const [error, setError] = useState(null);
    const [badInput, setBadInput] = useState(null)

    const {cart, totalPrice} = useContext(context);

    const nameRef = useRef();
    const addressRef = useRef();
    const cityRef = useRef();
    const stateRef = useRef();
    const emailRef = useRef();
    const mobileRef = useRef();

    function handleClick() {

        const db = getFirestore();
        const orders = db.collection("orders");

        const miOrden = {
            buyer: {
                name: nameRef.current.value,
                address: addressRef.current.value,
                city: cityRef.current.value,
                state: stateRef.current.value,
                email: emailRef.current.value,
                phone: mobileRef.current.value,
            },
            items: cart,
            total: totalPrice(),
            date: firebase.firestore.Timestamp.fromDate(new Date())
        }

        checkFields(miOrden)

        if(!badInput){
            orders.add(miOrden)
                .then(({ id }) => {
                    setOrderId(id);
                })
                .catch((err) => {
                    setError('Lo sentimos, ocurrio un error al ingresar la orden en nuestra base: ' + err)
                });
        }

    }

    function checkFields(order){
        const mensaje = 'Debes completar todos los campos para continuar.'
        if(
            order.buyer.name === '' ||
            order.buyer.address === '' ||
            order.buyer.city === '' ||
            order.buyer.state === '' ||
            order.buyer.email === '' ||
            order.buyer.phone === ''
        ) setBadInput(mensaje)

        const emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
        
        if (!emailRegex.test(order.buyer.email)) setBadInput('El email no es válido.')
    }

    return (

        <>
            {
            error ?
            <ErrorMessage error={error}/>
            :
            <div className='containerCheckOut'>
                <h3 className='margin'>Ingresá tus datos:</h3>

                <input type="text" name="name" ref={nameRef} placeholder="Nombre y Apelllido" />
                <br />

                <input type="text" name="phone" ref={mobileRef} placeholder="Nro de Celular" />
                <br />

                <input type="text" name="email" ref={emailRef} placeholder="Email" />
                <br />

                <input type="text" name="state" ref={stateRef} placeholder="Provincia" />
                <br />

                <input type="text" name="city" ref={cityRef} placeholder="Ciudad" />
                <br />

                <input type="text" name="address" ref={addressRef} placeholder="Direccion" />
                <br />

                <Button variant='light' onClick={() => handleClick()} className='border margin'>
                    Vamos!
                </Button>
                
                {badInput && (<p style={{color:'red'}}>{badInput}</p>)}
                {orderId && (<h3>Felicidades! Se ha creado correctamente tu orden: {orderId}</h3>)}
            </div>
            }
            

            
        </>
    );

};
