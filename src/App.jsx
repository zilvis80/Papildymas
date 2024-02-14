import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { mockData } from './mockData';
import './App.scss';
import Navbar from './Components/Navbar/Navbar';
import Main from './Components/Main/Main';
import MyCard from './Components/MyCard/MyCard';

function App() {
  const [cardData, setCardData] = useState([]);
  const [data, setData] = useState(mockData);
  const handleAddToCard = (item) => {
    setCardData([...cardData, item]);
    const filteredData = data.filter(
      (dataItem) => dataItem.title !== item.title
    );
    setData(filteredData);
  };
  const handleRemoveFromCard = (item) => {
    setData([...data, item]);
    const filteredCarData = cardData.filter(
      (dataItem) => dataItem.title !== item.title
    );
    setCardData(filteredCarData);
  };
  return (
    <>
      <Navbar />
      <Routes>
        <Route
          path='/'
          element={
            <Main data={data} setData={setData} setCardData={handleAddToCard} />
          }
        />
        <Route
          path='/my-card'
          element={
            <MyCard cardData={cardData} setCardData={handleRemoveFromCard} />
          }
        />
      </Routes>
    </>
  );
}

export default App;
