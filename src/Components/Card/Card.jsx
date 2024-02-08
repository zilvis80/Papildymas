import React from 'react';
// components
import Button from '../Button/Button';
import './Card.scss';

function Card({ title, description, img }) {
  return (
    <div className='card'>
      <h3>{title}</h3>
      <p>{description}</p>
      <Button type='teal'>Buy More</Button>
    </div>
  );
}

export default Card;
