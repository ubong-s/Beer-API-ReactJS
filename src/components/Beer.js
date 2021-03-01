import React from 'react';
import { Link } from 'react-router-dom';

const Beer = ({ id, name, image, tag }) => {
  return (
    <Link to={`/beer/${id}`}>
      <article className='single-beer'>
        <div className='image-div'>
          <img src={image} alt={name} />
        </div>
        <div className='footer'>
          <h3>{name}</h3>
          <p>{tag}</p>
          <button className='btn'>Details</button>
        </div>
      </article>
    </Link>
  );
};

export default Beer;
