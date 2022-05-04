import React from 'react'
import "./OrderBy.css"

export default function OrderBy({order}) {

    const handleChange = (event) => {
        event.preventDefault()
        const seleccionado = event.target.value
        console.log(`Seleccionado: ${seleccionado}`)
        order(seleccionado)
    }

    return (
        <div className='order-by'>
            <label>Ordenar Productos</label>
            <select onChange={handleChange} className='width'>
                <option default></option>
                <option>Menor Precio</option>
                <option>Mayor Precio</option>
                <option>A-Z</option>
            </select>
        </div>
  )
}
