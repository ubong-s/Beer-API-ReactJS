import React from 'react';
import loader from '../loading.gif';

const Loading = () => {
  return (
    <div className='section-container'>
      <img src={loader} alt='' />
    </div>
  );
};

export default Loading;
