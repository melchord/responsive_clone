import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';

import './index.scss';

// BEM -> Block Element Modifier

const Component = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div className='navbar'>
      <div className='navbar-links'>
        <div className='navbar-links-logo'>
          <img src='/logo.svg' alt='logo' />
        </div>
        <div className='navbar-links-container'>
          <a href='#home'>Home</a>
          <a href='#home'>What is GPT3?</a>
          <a href='#home'>Open AI</a>
          <a href='#home'>Case Studies</a>
          <a href='#home'>Library</a>
        </div>
      </div>
      <div className='navbar-sign'>
        <p>Sign In</p>
        <button type='button'>Sign Up</button>
      </div>
      <div className='navbar-menu'>
        {toggleMenu ? (
          <RiCloseLine color='#fff' size={27} onClick={() => setToggleMenu(false)} />
        ) : (
          <RiMenu3Line color='#fff' size={27} onClick={() => setToggleMenu(true)} />
        )}
        {toggleMenu && (
          <div className='navbar-menu-container scale-up-center'>
            <div className='menu-container-links'>
              <a href='#home'>Home</a>
              <a href='#home'>What is GPT3?</a>
              <a href='#home'>Open AI</a>
              <a href='#home'>Case Studies</a>
              <a href='#home'>Library</a>
            </div>
            <div className='menu-container-links-sign'>
              <p>Sign In</p>
              <button type='button'>Sign Up</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Component;
