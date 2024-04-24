import React, { useContext } from 'react';
import { handleSort } from '../../Utils/SortUtils';
import { AppContext } from '../../Context/AppContext';

// components
import Card from '../Card/Card';
import SortButtons from '../SortButtons/SortButtons';

function Favorite() {
  const { favoriteData, setFavoriteData } = useContext(AppContext);

  const handleSortData = (direction) => {
    const sortedData = handleSort(favoriteData, direction);
    setFavoriteData(sortedData);
  };

  return (
    <main className='container'>
      <SortButtons handleSortData={handleSortData} />

      {favoriteData.map((item) => (
        <Card
          key={item.title}
          title={item.title}
          description={item.description}
          price={item.price}
          handleCardButton={() => {}}
        />
      ))}
    </main>
  );
}

export default Favorite;
