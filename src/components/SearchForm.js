import React, { useRef } from 'react';
import { useGlobalContext } from '../context';

export default function SearchForm() {
  const { setSearch } = useGlobalContext();
  const searchValue = useRef('');

  const searchBeer = () => {
    setSearch(searchValue.current.value);
  };

  function handleSubmit(e) {
    e.preventDefault();
  }

  React.useEffect(() => {
    searchValue.current.focus();
  }, []);
  return (
    <>
      <section>
        <div className='section-container'>
          <form className='search-form' onSubmit={handleSubmit}>
            <div className='form-control'>
              <label htmlFor='name'>search your favorite beer</label>
              <input
                type='text'
                name='name'
                id='name'
                ref={searchValue}
                onChange={searchBeer}
              />
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
