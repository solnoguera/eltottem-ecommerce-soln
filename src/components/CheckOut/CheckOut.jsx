import React, {useRef, useState, useContext} from 'react';
import firebase from "firebase";
import { Button } from 'react-bootstrap'
import { NavLink } from 'react-router-dom';
import { getFirestore } from '../../firebase/Firebase';
import { context } from '../../context/CartProvider';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import './CheckOut.css'

export default function CheckOut() {

    const [state, setState] = useState({
        orderId: null,
        error: null,
        badInput: null
    });

    const {cart, totalPrice, cleanCart} = useContext(context);

    const nameRef = useRef();
    const addressRef = useRef();
    const cityRef = useRef();
    const stateRef = useRef();
    const emailRef = useRef();
    const mobileRef = useRef();

    function handleClick() {

        const order = {
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

        if ( order.buyer.name === '' ||
             order.buyer.address === '' ||
             order.buyer.city === '' ||
             order.buyer.state === '' ||
             order.buyer.email === '' ||
             order.buyer.phone === '' ) 
        return setState({
            orderId: null,
            error: null,
            badInput: 'Debes completar todos los campos para continuar.'
        })

        const emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
        
        if (!emailRegex.test(order.buyer.email)) 
        return setState({
            orderId: null,
            error: null,
            badInput: 'El email ingresado no es válido.'
        })

        sendOrder(order)
        cleanCart()
    }

    function sendOrder(miOrden){
        const db = getFirestore()
        const orders = db.collection("orders");
        orders.add(miOrden)
            .then(({ id }) => {
                setState({
                    orderId: id,
                    error: null,
                    badInput: null
                })
                updateStock(miOrden.items)
            })
            .catch((err) => {
                setState({
                    orderId: null,
                    error: `Ocurrio un error al enviar la orden: ${err}. Inténtelo nuevamente`,
                    badInput: null
                })
            });
    }

    function updateStock(items){
        const db = getFirestore()
        const products = db.collection("products");

        items.forEach( item => {
            const product = products.doc(item.product.id);
            const newStock = item.product.stock - item.quantity
            
            product.update({stock: newStock})
            .then(() => console.log('Cambió el stock!'))
            .catch((err) => {
                setState({
                    orderId: null,
                    error: `Ocurrió un error al actualizar el stock: ${err}. Inténtelo nuevamente`,
                    badInput: null
                })
            })
        })   
    }

    return (

        <>
            {
            state.error ?
            <ErrorMessage error={state.error}/>
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
                <div id='sendOrder'>
                    {state.badInput && (<p>{state.badInput}</p>)}
                    {state.orderId ?
                        <> 
                            <h3>Felicidades! Se ha creado correctamente tu orden: {state.orderId}</h3>
                            <NavLink to={'/'} style={{color:'black'}}>Volver al inicio</NavLink>
                        </>
                        :
                        <Button variant='light' onClick={() => handleClick()} className='border'>
                            Vamos!
                        </Button>
                    }
                </div>
                
            </div>
            }
            
        </>
    );

};
