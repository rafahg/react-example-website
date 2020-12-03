import React from 'react'
import '../App.css';
import { Button } from './Button';
import './CentralSection.css';

function CentralSection() {
  return (
    <div className='central-container'>
      {/* <image src="../images/Blue-bg-photo.png"/>
      <video src='/react-example-website/videos/video-1.mp4' autoPlay loop muted/> */}
      <h1>Hola!</h1>
      <p>Soy Belén Iglesias, bienvenidas a mi pagina web. <br></br> Aquí podrás encontrar todos los recursos necesarios para aprender online</p>
      <div className="central-btns">
        <Button className='btns' buttonStyle='btn--outline'
        buttonSize='btn--large'>
          Regístrate
        </Button>
        {/* <Button className='btns' buttonStyle='btn--primary'
        buttonSize='btn--large'>
          WATCH TRAILER <i className='far fa-play-circle' />
        </Button> */}
      </div>
    </div>
  )
}

export default CentralSection
