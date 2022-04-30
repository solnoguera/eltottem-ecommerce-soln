import React, {createContext, useState} from 'react';

export const context = createContext()

export default function CartProvider ({children}){
  
    const [cart, setCart] = useState([])
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(true)
  
    const addToCart = (product, quantity) => {
        
        if(isInCart(product.id)){
            const indexItem = cart.findIndex(element => element.product.id === product.id)
            cart[indexItem].quantity = cart[indexItem].quantity + quantity
            setCart([...cart])
        } else {
            setCart( [...cart, {product, quantity} ] )
        }
    }

    const isInCart = (id) => {
        return cart.some(element => element.product.id === id)
    }

    const deleteFromCart = (id) => {
        const newCart = cart.filter(element => element.product.id !== id)
        setCart(newCart) 
    }

    const cleanCart = () => {
        setCart([])
    }

    const totalPrice = () => {
        return cart.reduce( (acumulador, item) => acumulador + (item.product.price * item.quantity),0 )
    }

    const totalItems = () => {
        return cart.reduce( (acumulador, item) => acumulador +  item.quantity ,0 )
    }

    const oneItemMore = (id) => {
        const indexItem = cart.findIndex(element => element.product.id === id)
        const item = cart[indexItem]
        if(item.quantity < item.product.stock){
            cart[indexItem].quantity = item.quantity + 1
            setCart([...cart])
        }
        
    }

    const oneItemLess = (id) => {
        const indexItem = cart.findIndex(element => element.product.id === id)
        const item = cart[indexItem]
        if(item.quantity > 1){
            cart[indexItem].quantity = item.quantity - 1
            setCart([...cart])
        }
    }
  
    return (
        <context.Provider 
            value={{cart, addToCart, deleteFromCart, cleanCart, oneItemMore, oneItemLess, totalPrice, totalItems, error, setError, loading, setLoading}}>
            {children}
        </context.Provider>
    );
};

//store conjunto de reducers,