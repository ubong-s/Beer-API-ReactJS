import React from 'react';
import Loading from './Loading';
import Beer from './Beer';
import { useGlobalContext } from '../context';

const BeerList = () => {
  const { loading, beers, filterBeers } = useGlobalContext();
  if (loading) {
    return <Loading />;
  }

  if (beers.length < 1) {
    return (
      <div className='section-container'>
        <h2>No beers match your search</h2>
      </div>
    );
  }

  return (
    <section>
      <div className='section-container'>
        <h2>Beers</h2>
        <div className='beers-center'>
          {filterBeers.map((item) => {
            return <Beer key={item.id} {...item} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default BeerList;
