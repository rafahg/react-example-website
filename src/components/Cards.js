import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Mira lo que hacemos en clase!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='/react-example-website/images/ciencias.jpg'
              text='Nos divertimos haciendo projectos a la vez que aprendemos'
              label='Ciencias'
              path='/services'
            />
            <CardItem
              src='/react-example-website/images/img-2.jpg'
              text='Travel through the Islands of Bali in a Private Cruise'
              label='Arte'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='/react-example-website/images/img-3.jpg'
              text='Set Sail in the Atlantic Ocean visiting Uncharted Waters'
              label='Teatro'
              path='/services'
            />
            <CardItem
              src='/react-example-website/images/img-4.jpg'
              text='Experience Football on Top of the Himilayan Mountains'
              label='Inglés'
              path='/products'
            />
            <CardItem
              src='/react-example-website/images/img-8.jpg'
              text='Ride through the Sahara Desert on a guided camel tour'
              label='Lengua'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
