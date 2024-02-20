import React, { useState, createContext } from 'react';
import { mockData } from '../mockData';

export const AppContext = createContext();

function AppContextProvider(props) {
  const [data, setData] = useState(mockData);
  const [cardData, setCardData] = useState([]);
  const [favoriteData, setFavoriteData] = useState([]);

  const handleAddToCard = (item) => {
    setCardData([...cardData, item]);

    const filteredData = data.filter(
      (dataItem) => dataItem.title !== item.title
    );

    setData(filteredData);
  };

  const handleRemoveFromCard = (item) => {
    setData([item, ...data]);

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
