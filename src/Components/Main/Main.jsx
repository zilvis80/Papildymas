import React, { useContext } from 'react';
import { handleSort } from '../../Utils/SortUtils';
import { AppContext } from '../../Context/AppContext';

// import { mockData } from '../../mockData';
// components
import Card from '../Card/Card';
import SortButtons from '../SortButtons/SortButtons';
import './Main.scss';

function Main() {
  const { data, setData, handleAddToCard } = useContext(AppContext);

  const handleSortData = (direction) => {
    const sortedData = handleSort(data, direction);
    setData(sortedData);
  };

  return (
    <main className='container'>
      <SortButtons handleSortData={handleSortData} />
      {data.map((item) => (
        <Card
          key={item.title}
          title={item.title}
          description={item.description}
          handleCardButton={handleAddToCard}
        />
      ))}
    </main>
  );
}

export default Main;
