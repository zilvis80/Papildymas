import React from 'react';
import './Navbar.scss';

function Navbar({ setTab }) {
  return (
    <nav className='nav-container'>
      <h1>My Shop</h1>
      <ul>
        <li
          onClick={() => {
            setTab('all');
          }}
        >
          All items
        </li>
        <li
          onClick={() => {
            setTab('card');
          }}
        >
          My Card
        </li>
        <li>Favorite</li>
      </ul>
    </nav>
  );
}

export default Navbar;
