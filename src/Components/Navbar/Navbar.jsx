import React from 'react';
import { NavLink } from 'react-router-dom';
import User from '../User/User';
import './Navbar.scss';

function Navbar() {
  return (
    <nav className='nav-container'>
      <h1>My Shop</h1>
      <ul>
        <li>
          <NavLink to='/'>All items</NavLink>
        </li>
        <li>
          <NavLink to='/my-card'>My Card</NavLink>
        </li>
        <li>
          <NavLink to='/Favorite'>Favorite</NavLink>
        </li>
      </ul>
      <h1>
        <User />
      </h1>
    </nav>
  );
}

export default Navbar;
