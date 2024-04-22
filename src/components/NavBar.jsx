import React from 'react';
import { NavLink } from 'react-router-dom';
import './styles/navbar.css';

const NavBar = () => {
  
  return (
    <header>
      <div>
        <h2 className='logo'>JM</h2>
      </div>
      <nav>
        <div className='link-cluster'>
          <NavLink className='nav-link' to='/'>
            <button className='nav-button'>Home</button>
          </NavLink>
          <NavLink className='nav-link' to='/about'>
            <button className='nav-button'>About Me</button>
          </NavLink>
        </div>
        <div className='link-cluster'>
          <NavLink className='nav-link' to='/portfolio'>
            <button className='nav-button'>Portfolio</button>
          </NavLink>
          <NavLink className='nav-link' to='/contact'>
            <button className='nav-button'>Contact Me</button>
          </NavLink>
        </div>
      </nav>
    </header>
  );
};

const isActive = (match, location) => {
  if (!match || !location) return false;
  const { pathname } = location;
  return pathname === match.pathname || pathname.startsWith(match.pathname);
};

export default NavBar;
