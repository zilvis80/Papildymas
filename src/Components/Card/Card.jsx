import React from 'react';
// components
import Button from '../Button/Button';
import './Card.scss';

function Card({ title, description, handleCardButton, card }) {
  const handleAddToCard = () => {
    handleCardButton({ title, description });
  };
  return (
    <div className='card'>
      <h3>{title}</h3>
      <p>{description}</p>
      <Button onClick={handleAddToCard}>
        {card ? 'go to the store' : 'Buy Now'}
      </Button>
    </div>
  );
}

export default Card;
