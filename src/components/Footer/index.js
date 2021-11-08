import React from 'react';
import './styles.css';

import twitter from '../../assets/twitter.svg';
import github from '../../assets/github.svg';

const Footer = () => {
  return (
    <footer>
      <p className='footer_p'>coded with love by Pedro</p>

      <div className='footer__contacts'>
        <a
          href='https://twitter.com/pedrogdsilva410'
          rel='noopener noreferrer'
          target='_blank'
        >
          <img src={twitter} alt='twitter' className='footer__img' />
        </a>

        <a
          href='https://github.com/pedrosilva410'
          rel='noopener noreferrer'
          target='_blank'
        >
          <img src={github} alt='github' className='footer__img' />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
