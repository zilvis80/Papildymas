import React from 'react';
import './Navbar.scss';
function Navbar() {
  return (
    <nav className='nav_container'>
      <h1>My Shop</h1>
      <ul>
        <li>All items</li>
        <li>Favorite</li>
      </ul>
    </nav>
  );
}
export default Navbar;
