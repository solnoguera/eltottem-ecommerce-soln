import React, {useRef, useState, useContext} from 'react';
import firebase from "firebase";
import { Button } from 'react-bootstrap'
import { NavLink } from 'react-router-dom';
import { getFirestore } from '../../firebase/Firebase';
import { context } from '../../context/CartProvider';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import checkInputs from '../../helpers/checkInputs';
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
            items: cart || [],
            total: totalPrice() || 0,
            date: firebase.firestore.Timestamp.fromDate(new Date())
        }
        let badInput = checkInputs(order.buyer)
        if(badInput){
            setState({ orderId: null, error: null, badInput })
        } else {
            sendOrder(order)
            cleanCart()
        }
            
    }

    function sendOrder(miOrden){
        const db = getFirestore()
        const orders = db.collection("orders");
        orders.add(miOrden)
            .then( ({id}) => {
                updateStock(miOrden.items)
                setState({  orderId: id,
                            error: null,
                            badInput: null })
            })
            .catch( err => setState({
                            orderId: null,
                            error: `Ocurrio un error al enviar la orden: ${err}. Inténtelo nuevamente`,
                            badInput: null })
            );
    }

    function updateStock(items){
        const db = getFirestore();
        const products = db.collection("products");
        const batch = db.batch();

        items.forEach( item => {
            const product = products.doc(item.product.id);
            const newStock = item.product.stock - item.quantity
            batch.update(product, {stock: newStock});
        })  
        
        batch.commit()
        .then(()=> console.log(`Se ha actualizado el batch de productos!`))
        .catch( err => {
            setState({
                orderId: null,
                error: `Ocurrio un error al intentar actualizar la base de datos: ${err}.`,
                badInput: null })
        });
    }

    const inputs = [{name : "name", ref : nameRef, placeholder : "Nombre y Apelllido"},
                    {name : "phone", ref : mobileRef, placeholder : "Nro de Celular"},
                    {name : "email", ref : emailRef, placeholder : "Email"},
                    {name : "state", ref : stateRef, placeholder : "Provincia"},
                    {name : "city", ref : cityRef, placeholder : "Ciudad"},
                    {name : "adress", ref : addressRef, placeholder : "Dirección"}]

    return (
        <>
            {
            state.error ?
            <ErrorMessage error={state.error}/>
            :
            <div className='containerCheckOut'>
                <h3 className='margin'>Para continuar, debes ingresar tus datos:</h3>

                {
                    inputs.map((input)=> <Input name={input.name} ref={input.ref} placeholder={input.placeholder}/>)
                }
                
                <div id='sendOrder'>
                    {state.badInput && (<p>{state.badInput}</p>)}
                    {state.orderId ?
                        <> 
                            <h3>Muchas gracias por tu compra!</h3> 
                            <h5>Se ha enviado correctamente tu orden.</h5>
                            <NavLink to={'/'} style={{color:'black'}}>Volver al inicio</NavLink>
                        </>
                        :
                        <Button variant='danger' onClick={() => handleClick()} className='enviar-pedido'>
                            Enviar Pedido
                        </Button>
                    }
                </div>
                
            </div>
            }
            
        </>
    );

};

const Input = React.forwardRef(({name, placeholder}, ref) => {
    return (
        <>
            <input type="text" name={name} ref={ref} placeholder={placeholder}/>
            <br />
        </>
    )
})