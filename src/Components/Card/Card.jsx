import React, { useContext } from 'react';
import { AppContext } from '../../Context/AppContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
// components
import Button from '../Button/Button';
import './Card.scss';

function Card({ title, description, handleCardButton, card }) {
  const { favoriteData, handleAddToFavorite, handleRemoveFromFavorite } =
    useContext(AppContext);
  const isFavorite = favoriteData.some((item) => item.title === title);
  const handleAddToCard = () => {
    handleCardButton({ title, description });
  };

  return (
    <div className='item'>
      <FontAwesomeIcon
        icon={faHeart}
        className={`favorite-icon ${isFavorite ? 'favorite-icon--active' : ''}`}
        onClick={() => {
          isFavorite
            ? handleRemoveFromFavorite({ title, description })
            : handleAddToFavorite({ title, description });
        }}
      />
      <h3>{title}</h3>
      <p>{description}</p>
      <Button onClick={handleAddToCard}>
        {card ? 'go to the store' : 'Buy Now'}
      </Button>
    </div>
  );
}

export default Card;
