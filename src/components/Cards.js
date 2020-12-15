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
              path='/sign-up'
            />
            <CardItem
              src='/react-example-website/images/arte.jpeg'
              text='Actividades para todos!'
              label='Arte'
              path='/sign-up'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='/react-example-website/images/teatro.jpeg'
              text='Imaginacion al poder!'
              label='Teatro'
              path='/sign-up'
            />
            <CardItem
              src='/react-example-website/images/ingles.jpg'
              text='Your children will help you understand your favourites shows in Neflix!!'
              label='Inglés'
              path='/sign-up'
            />
            <CardItem
              src='/react-example-website/images/lengua.jpeg'
              text='Para entenderlo todo, hay que empezar por aqui!.'
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
