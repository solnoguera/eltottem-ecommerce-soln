import React from 'react';
import Item from '../Item/Item';
import './ItemList.css'

export default function ItemList ({products, greeting}) {

  return (
    <>
      <p className='greeting'>{greeting}</p>
      <div className="wrapper">
          {
            products?.map(product =><Item item={product} key={product.id} />)
          }
      </div>
    </>
  )
};
