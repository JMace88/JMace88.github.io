import React from 'react';
import { Link } from 'react-router-dom';
import './styles/navbar.css';

const NavBar = () => {
  return (
    <header>
      <div>
        <h2 className='logo'>
          <a
            className='logo-text'
            href='https://github.com/JMace88'
            title='My GitHub Profile'
          >
            JM
          </a>
        </h2>
      </div>
      <nav>
        <Link className='nav-link' to='/'>
          <button className='nav-button'>Home</button>
        </Link>
        <Link className='nav-link' to='/about'>
          <button className='nav-button'>About Me</button>
        </Link>
        <Link className='nav-link' to='/portfolio'>
          <button className='nav-button'>Portfolio</button>
        </Link>
        <Link className='nav-link' to='/contact'>
          <button className='nav-button'>Contact Me</button>
        </Link>
      </nav>
    </header>
  );
};

export default NavBar;
