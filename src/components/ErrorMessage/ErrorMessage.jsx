import React from 'react';
import './ErrorMessage.css'

const ErrorMessage = ({error}) => {
  return (
    <div className='error'>
        <h2>Lo sentimos, ha ocurrido un error :( </h2>
        <p className='red'>{error}</p>
    </div>
  );
};

export default ErrorMessage;
