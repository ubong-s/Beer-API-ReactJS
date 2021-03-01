import React from 'react';
import logo from '../BeerLogo.svg';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className='navbar'>
      <div className='nav-container'>
        <Link to='/'>
          <img src={logo} alt='beer logo' />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
