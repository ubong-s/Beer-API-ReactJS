import React, { useState, useEffect } from 'react';
import Loading from '../components/Loading';
import { Link, useParams } from 'react-router-dom';
import './SingleBeer.css';

const url = 'https://api.punkapi.com/v2/beers/';

const SingleBeer = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [beer, setBeer] = useState('');

  const getBeer = async () => {
    setLoading(true);
    const response = await fetch(`${url}${id}`);

    const data = await response.json();

    if (data) {
      const {
        name,
        image_url: image,
        tagline: tag,
        description: info,
        food_pairing: foodPair,
        brewers_tips: tips,
        ingredients,
      } = data[0];

      const { hops, malt, yeast } = ingredients;

      const newBeer = {
        name,
        image,
        tag,
        info,
        foodPair,
        tips,
        hops,
        malt,
        yeast,
      };

      setBeer(newBeer);
      setLoading(false);
    } else {
      setBeer(null);
    }
  };

  useEffect(() => {
    getBeer();
  }, [id]);

  if (loading) {
    return <Loading />;
  }

  const { name, image, tag, info, foodPair, tips, hops, malt, yeast } = beer;

  return (
    <section>
      <div className='section-container btn-container'>
        <Link to='/'>
          <button className='btn'>Back to Beers</button>
        </Link>
      </div>
      <div className='section-container'>
        <div className='beer'>
          <div className='beer-img'>
            <img src={image} alt={name} />
          </div>
          <div className='beer-info'>
            <h1 className='beer-title'>{name}</h1>
            <h4 className='btn-alt'>{tag}</h4>
            <p className='info'>{info}</p>
            <div className='beer-food'>
              <h3 className='btn-alt'>Food pairings</h3>
              <ul>
                {foodPair.map((item, index) => {
                  return <li key={index}>{item}</li>;
                })}
              </ul>
            </div>
            <div className='beer-ingredients'>
              <h3 className='btn-alt'>Ingredients</h3>
              <div className='beer-ingredients-grid'>
                <div className='beer-hop'>
                  <h4>Hops</h4>
                  {hops.map((item, index) => {
                    return <p key={index}>{item.name}</p>;
                  })}
                </div>
                <div className='beer-malt'>
                  <h4>Malt</h4>
                  {malt.map((item, index) => {
                    return <p key={index}>{item.name}</p>;
                  })}
                </div>
                <div className='beer-yeast'>
                  <h4>Yeast</h4>
                  <p>{yeast}</p>
                </div>
              </div>
            </div>
            <div>
              <h4 className='btn-alt'>Tips</h4>
              <p>{tips}</p>
            </div>

            <Link to='/'>
              <button className='btn'>Back to Beers</button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SingleBeer;
