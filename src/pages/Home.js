import React from 'react';
import SearchForm from '../components/SearchForm';
import BeerList from '../components/BeerList';

const Home = () => {
  return (
    <main>
      <SearchForm />
      <BeerList />
    </main>
  );
};

export default Home;
