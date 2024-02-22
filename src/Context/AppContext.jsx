import React, { useState, createContext, useEffect } from 'react';
import { mockData } from '../mockData';

export const AppContext = createContext();

function AppContextProvider(props) {
  const [data, setData] = useState(
    JSON.parse(localStorage.getItem('data')) || mockData
  );
  const [cardData, setCardData] = useState(
    JSON.parse(localStorage.getItem('cardData')) || []
  );
  const [favoriteData, setFavoriteData] = useState(
    JSON.parse(localStorage.getItem('favoriteData')) || []
  );

  useEffect(() => {
    localStorage.setItem('data', JSON.stringify(data));
    localStorage.setItem('cardData', JSON.stringify(cardData));
  }, [data, cardData]);
  useEffect(() => {
    localStorage.setItem('favoriteData', JSON.stringify(favoriteData));
  }, [favoriteData]);

  const handleAddToCard = (item) => {
    setCardData([...cardData, item]);

    const filteredData = data.filter(
      (dataItem) => dataItem.title !== item.title
    );

    setData(filteredData);
    // localStorage.setItem('data', JSON.stringify(filteredData));
  };

  const handleRemoveFromCard = (item) => {
    setData([item, ...data]);
    // localStorage.setItem('data', JSON.stringify([item, ...data]));

    const filteredCardData = cardData.filter(
      (dataItem) => dataItem.title !== item.title
    );

    setCardData(filteredCardData);
  };

  const handleAddToFavorite = (item) => {
    setFavoriteData([...favoriteData, item]);
  };

  const handleRemoveFromFavorite = (item) => {
    const filteredFavoriteData = favoriteData.filter(
      (dataItem) => dataItem.title !== item.title
    );

    setFavoriteData(filteredFavoriteData);
  };

  return (
    <AppContext.Provider
      value={{
        data,
        setData,
        cardData,
        setCardData,
        favoriteData,
        setFavoriteData,
        handleAddToCard,
        handleRemoveFromCard,
        handleAddToFavorite,
        handleRemoveFromFavorite,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
}

export default AppContextProvider;
