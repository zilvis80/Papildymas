import React, { useContext } from 'react';
import { AppContext } from '../../Context/AppContext';
import { handleSort } from '../../Utils/SortUtils';
// components
import Card from '../Card/Card';
import SortButtons from '../SortButtons/SortButtons';

function MyCard() {
  const { cardData, setCardData, handleRemoveFromCard } =
    useContext(AppContext);
  const handleSortData = (direction) => {
    const sortedData = handleSort(cardData, direction);
    setCardData(sortedData);
  };

  return (
    <main className='container'>
      <SortButtons handleSortData={handleSortData} />

      {cardData.map(({ title, description }) => (
        <Card
          key={title}
          title={title}
          description={description}
          handleCardButton={handleRemoveFromCard}
          card={true}
        />
      ))}
    </main>
  );
}

export default MyCard;
