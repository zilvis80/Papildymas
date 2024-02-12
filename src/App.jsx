import React, { useState } from 'react';

import './App.scss';
import Navbar from './Components/Navbar/Navbar';
import Main from './Components/Main/Main';
import MyCard from './Components/MyCard/MyCard';

function App() {
  const [tab, setTab] = useState('all');
  const [cardData, setCardData] = useState([]);
  return (
    <>
      <Navbar setTab={setTab} />
      {tab === 'all' && <Main setCardData={setCardData} />}
      {tab === 'card' && (
        <MyCard cardData={cardData} setCardData={setCardData} />
      )}
    </>
  );
}

export default App;
