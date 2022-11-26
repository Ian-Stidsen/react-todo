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
  let navbarToggled = false;
  function navToggle() {
    if (navbarToggled) navbarLinks.classList.toggle('show');
    navbarToggled = !navbarToggled;
    navbar.classList.toggle('show');
    navbar.addEventListener('transitionend', ()=>{
      navbarLinks.classList.toggle('show');
    });
  }
  return (
    <header className="navbar-container">
      <nav className='navbar'>
        <h1 className='navbar-text'>Todo List</h1>
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