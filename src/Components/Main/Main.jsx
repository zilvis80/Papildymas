import React, { useContext, useState } from 'react';
import { handleSort } from '../../Utils/SortUtils';
import { AppContext } from '../../Context/AppContext';
// components
import Card from '../Card/Card';
import SortButtons from '../SortButtons/SortButtons';

import './Main.scss';

function Main() {
  const { data, setData, handleAddToCard } = useContext(AppContext);
  console.log('main data...', data);
  const [searchValue, setSearchValue] = useState('');

  const handleSortData = (direction) => {
    const sortedData = handleSort(data, direction);
    setData(sortedData);
  };

  return (
    <main className='custom-container'>
      <div className='container-actions'>
        <SortButtons handleSortData={handleSortData} />
        <input
          type='text'
          placeholder='Search...'
          value={searchValue}
          onChange={(e) => {
            setSearchValue(e.target.value);
          }}
        />
      </div>
      {!data.length && <h2>There is no items in the shop</h2>}
      {data
        .filter(
          ({ title, description, price, imgUrl }) =>
            title.toLowerCase().includes(searchValue) ||
            price.toLowerCase().includes(searchValue) ||
            description.toLowerCase().includes(searchValue.toLowerCase()) ||
            imgUrl.toLowerCase().includes(searchValue)
        )
        .map((item) => (
          <Card
            key={item.title}
            imgUrl={item.img}
            title={item.title}
            description={item.description}
            price={item.price}
            handleCardButton={handleAddToCard}
          />
        ))}
    </main>
  );
}

export default Main;
