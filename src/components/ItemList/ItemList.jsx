import React from 'react';
import Item from '../Item/Item';
import './ItemList.css'

export default function ItemList ({products}) {

  return (
    <div className="wrapper">
        {
            products.map(product =><Item item={product} />)
        
        }
    </div>
  )
};
