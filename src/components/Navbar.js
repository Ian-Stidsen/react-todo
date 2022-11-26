import React from 'react';
import { useRef } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

import './navbar.css';

function Navbar() {
  let navbar;
  let navbarLinks;

  // Adds defer / delay so there isn't any problems loading the script.
  window.addEventListener("load", ()=>{
    navbar = document.getElementsByClassName('navbar')[0];
    navbarLinks = document.getElementsByClassName('navbar-links')[0];
  });

  function navToggle() {
    navbar.classList.toggle('show');
    navbarLinks.classList.toggle('show');
  };
  return (
    <header>
      <nav className='navbar'>
        <button id='FaBars' onClick={navToggle}><FaBars /></button>
        <button id='FaTimes' onClick={navToggle}><FaTimes/></button>
        <ul className='navbar-links'>
          <li><a href='/'>Home</a></li>
          <li><a href='/login'>Log-in</a></li>
          <li><a href='/signup'>Sign-up</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;