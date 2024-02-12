import React from 'react';
// components
import Button from '../Button/Button';
import './Card.scss';

function Card({ title, description, setCardData }) {
  const handleAddToCard = () => {
    setCardData([{ title, description }]);
  };
  return (
    <div className='card'>
      <h3>{title}</h3>
      <p>{description}</p>
      <Button onClick={handleAddToCard}>Buy More</Button>
    </div>
  );
}

export default Card;
