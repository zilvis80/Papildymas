import React, { useState, createContext } from 'react';
import { mockData } from '../mockData';

export const AppContext = createContext();

function AppContextProvider(props) {
  const [data, setData] = useState(mockData);
  const [cartData, setCartData] = useState([]);
  const [favoriteData, setFavoriteData] = useState([]);

  const handleAddToCard = (item) => {
    setCartData([...cartData, item]);

    const filteredData = data.filter(
      (dataItem) => dataItem.title !== item.title
    );

    setData(filteredData);
  };

  const handleRemoveFromCard = (item) => {
    setData([item, ...data]);

    const filteredCardData = cartData.filter(
      (dataItem) => dataItem.title !== item.title
    );

    setCartData(filteredCardData);
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
        cartData,
        setCartData,
        favoriteData,
        handleAddToFavorite,
        handleAddToCard,
        handleRemoveFromCard,
        handleRemoveFromFavorite,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
}

export default AppContextProvider;
