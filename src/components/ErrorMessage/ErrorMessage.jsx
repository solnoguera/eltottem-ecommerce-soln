import React from 'react';
import './ErrorMessage.css'

export default function ErrorMessage ({error}) {
  return (
    <div className='error'>
        <h2>Lo sentimos, ha ocurrido un error :( </h2>
        <p>{error}. Estamos trabajando en ello, intenta de nuevo más tarde.</p>
    </div>
  );
};

