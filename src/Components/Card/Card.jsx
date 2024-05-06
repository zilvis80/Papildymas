import React, { useContext } from 'react';
import { AppContext } from '../../Context/AppContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
// components
import Button from '../Button/Button';
import './Card.scss';

function Card({ imgUrl, title, description, price, handleCardButton, card }) {
  console.log('img..', imgUrl);
  const { favoriteData, handleAddToFavorite, handleRemoveFromFavorite } =
    useContext(AppContext);
  const isFavorite = favoriteData.some((item) => item.title === title);
  const handleAddToCard = () => {
    handleCardButton({ title, description, price, imgUrl });
  };

  return (
    <div className='card_list'>
      <div className='item'>
        <FontAwesomeIcon
          icon={faHeart}
          className={`favorite-icon ${
            isFavorite ? 'favorite-icon--active' : ''
          }`}
          onClick={() => {
            isFavorite
              ? handleRemoveFromFavorite({ title, description })
              : handleAddToFavorite({ title, description });
          }}
        />
        img:{imgUrl}
        {/* <img src='' alt='prod' width='500' height='600'></img> */}
        <h3>{title}</h3>
        <p>{description}</p>
        <h4>{price}</h4>
        <Button onClick={handleAddToCard}>
          {card ? 'go to the store' : 'Buy Now'}
        </Button>
      </div>
    </div>
  );
}

export default Card;
