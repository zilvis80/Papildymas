import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.scss';

function Navbar() {
  const [user, setUser] = useState('loading....');
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch(
          'https://jsonplaceholder.typicode.com/users/1'
        );
        if (!response.ok) throw new Error('Somteng wrong');
        const data = await response.json();
        console.log(data);
        setUser(data.username);
      } catch (error) {}
    };
    fetchUser();
  }, []);

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
      <h1>{user}</h1>
    </nav>
  );
}

export default Navbar;
