import React from 'react';
import './Card.scss';

function card({ title, description }) {
  // console.log(props);
  return (
    <div className='card'>
      <h3>{title}</h3>
      <p>{description}</p>
      <button>Click here</button>
    </div>
  );
}

export default card;
