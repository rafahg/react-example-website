import React from 'react'
import '../App.css';
import { Button } from './Button';
import './CentralSection.css';

function CentralSection() {
  return (
    <div className='central-container'>
      <video src='/react-example-website/videos/video-1.mp4' autoPlay loop muted/>
      <h1>ADVENTURE AWAITS</h1>
      <p>What are you waiting for?</p>
      <div className="central-btns">
        <Button className='btns' buttonStyle='btn--outline'
        buttonSize='btn--large'>
          GET STARTED
        </Button>
        <Button className='btns' buttonStyle='btn--primary'
        buttonSize='btn--large'>
          WATCH TRAILER <i className='far fa-play-circle' />
        </Button>
      </div>
    </div>
  )
}

export default CentralSection
