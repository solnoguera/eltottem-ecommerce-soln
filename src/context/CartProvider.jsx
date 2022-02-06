import React, {createContext, useState} from 'react';

export const context = createContext()

export default function CartProvider ({children}){
  
    const [cart, setCart] = useState([])
    const [total, setTotal] = useState(0)
  
    const addToCart = (product, quantity) => {
        
        if(isInCart(product.id)){
            const indexItem = cart.findIndex(element => element.product.id === product.id)
            cart[indexItem].quantity = cart[indexItem].quantity + quantity
            setCart([...cart])
        } else {
            setCart( [...cart, {product, quantity} ] )
        }
        setTotal(total + quantity)
    }

    const isInCart = (id) => {
        return cart.some(element => element.product.id === id)
    }

    const deleteFromCart = (id) => {
        const quantityDeleted = cart.find(el=> el.product.id===id).quantity
        const newCart = cart.filter(element => element.product.id !== id)
        setCart(newCart) 
        setTotal(total - quantityDeleted)
    }

    const cleanCart = () => {
        setCart([])
        setTotal(0)
    }

    const totalPrice = () => {
        return cart.reduce( (acumulador, item) => acumulador + (item.product.price * item.quantity),0 )
    }

    const oneItemMore = (id) => {
        const indexItem = cart.findIndex(element => element.product.id === id)
        const item = cart[indexItem]
        if(item.quantity < item.product.stock){
            cart[indexItem].quantity = item.quantity + 1
            setCart([...cart])
            setTotal(total+1)
        }
        
    }

    const oneItemLess = (id) => {
        const indexItem = cart.findIndex(element => element.product.id === id)
        const item = cart[indexItem]
        if(item.quantity > 1){
            cart[indexItem].quantity = item.quantity - 1
            setCart([...cart])
            setTotal(total-1)
        }
    }
  
    return (
        <context.Provider 
            value={{cart, addToCart, deleteFromCart, cleanCart, oneItemMore, oneItemLess, total, totalPrice}}>
            {children}
        </context.Provider>
    );
};