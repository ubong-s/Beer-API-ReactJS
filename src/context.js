import React, { useState, useEffect, useContext, createContext } from 'react';

const url = 'https://api.punkapi.com/v2/beers';
const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [beers, setBeers] = useState([]);

  const [search, setSearch] = useState('');

  const fetchBeers = async () => {
    setLoading(true);
    try {
      const response = await fetch(url);
      const data = await response.json();

      if (data) {
        const newBeers = data.map((beer) => {
          const { id, name, image_url, tagline } = beer;

          return { id: id, name: name, image: image_url, tag: tagline };
        });

        setBeers(newBeers);
      } else {
        setBeers([]);
      }
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  const filterBeers = beers.filter((beer) =>
    beer.name.toLowerCase().includes(search.toLowerCase())
  );

  useEffect(() => {
    fetchBeers();
     // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <AppContext.Provider
      value={{ loading, beers, fetchBeers, setBeers, filterBeers, setSearch }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
