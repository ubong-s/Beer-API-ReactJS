import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../logo.svg';

const Error = () => {
  return (
    <section>
      <div className=' section-container'>
        <img src={logo} alt='beers api' className='error-img' />
        <h1>No Beers here</h1>
        <Link to='/'>
          <button className='btn'>Go to Beers</button>
        </Link>
      </div>
    </section>
  );
};

export default Error;
