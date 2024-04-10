import React from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import User from '../User/User';
import AdminUser from '../AdminUser/AdminUser';
import './Navbar.scss';

function Navbar() {
  const { token } = useAuth();
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
        {token && (
          <li>
            <NavLink to='/admin'>Admin</NavLink>
          </li>
        )}
      </ul>
      <h1>
        {/* <User /> */}
        <AdminUser />
      </h1>
    </nav>
  );
}

export default Navbar;
