import React from 'react';

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer-container'>
        <a
          href='https://api.punkapi.com/v2/beers'
          target='_blank'
          rel='noreferrer'
          className='btn'
        >
          API Link
        </a>
      </div>
    </footer>
  );
};

export default Footer;
