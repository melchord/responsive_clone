import React from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';

import './index.scss';

// BEM -> Block Element Modifier

const Component = () => {
  return (
    <div className='navbar'>
      <div className='navbar-links'>
        <div className='navbar-links-logo'>
          <img src={logo} alt='logo' />
        </div>
      </div>
    </div>
  );
};

export default Component;
