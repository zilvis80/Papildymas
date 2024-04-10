import React from 'react';
import { Routes, Route } from 'react-router-dom';

import './App.scss';
import Navbar from './Components/Navbar/Navbar';
import Main from './Components/Main/Main';
import MyCard from './Components/MyCard/MyCard';
import Favorite from './Components/Favorite/Favorite';
import Admin from './Components/Admin/Admin';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/my-card' element={<MyCard />} />
        <Route path='/Favorite' element={<Favorite />} />
        <Route path='/Admin' element={<Admin />} />
      </Routes>
    </>
  );
}

export default App;
