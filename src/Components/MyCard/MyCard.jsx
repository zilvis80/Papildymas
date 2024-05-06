import React, { useContext } from 'react';
import { AppContext } from '../../Context/AppContext';
import { handleSort } from '../../Utils/SortUtils';
// components
import Card from '../Card/Card';
import SortButtons from '../SortButtons/SortButtons';
import './MyCard.scss';

function MyCard() {
  const { cardData, setCardData, handleRemoveFromCard } =
    useContext(AppContext);
  const handleSortData = (direction) => {
    const sortedData = handleSort(cardData, direction);
    setCardData(sortedData);
  };
  let priceSum = 0;
  cardData.forEach((element) => {
    priceSum += Number(element.price);
  });

  console.log('111111newSum...', priceSum);
  return (
    <main className='container'>
      <SortButtons handleSortData={handleSortData} />

      {cardData.map(({ title, description, price, imgUrl }) => (
        <Card
          key={title}
          imgUrl={imgUrl}
          title={title}
          description={description}
          price={price}
          handleCardButton={handleRemoveFromCard}
          card={true}
        />
      ))}
      <div>
        {' '}
        <span className='sumText'>Užsakymo suma: </span>
        <span className='sumPrice'>{priceSum}€</span>
        <div>
          <button className='pirkti'>Pirkti</button>
        </div>
      </div>
    </main>
  );
}

export default MyCard;
