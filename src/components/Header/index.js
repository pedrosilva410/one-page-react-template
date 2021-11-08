import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import './styles.css';

const Header = () => {
  let location = useLocation();
  console.log(typeof location.pathname);

  return (
    <header>
      <p className='header__p'>
        one-page-template
      </p>
    </header>
  );
};

export default Header;
