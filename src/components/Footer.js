import React from 'react'
import { Button } from './Button'
import './Footer.css'
import './Button.css'
import { Link } from 'react-router-dom'
import Logo from './logo.png'

function Footer() {
  return (
    <div className='footer-container'>
      <section className="footer-subscription">
        <p className="footer-subscription-heading">
          Unete al boletin semanal!
        </p>
        <p className="footer-subscription-text">
          Date de baja cuando quieras.
        </p>
        <div className="input-zone">
          <form>
            <input className='footer-input' type="email" name="email" placeholder='Your Email'/>
            <Button buttonStyle='btn--outline'>Subscribete</Button>
          </form>
        </div>
      </section>
      <div className="footer-links">
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>Sobre mi</h2>
            <Link to='/sign-up'>Como trabajo.</Link>
            <Link to='/sign-up'>Que opinan los Padres</Link>
            <Link to='/sign-up'>Que opinan los alumnos</Link>
          </div>
          <div className="footer-link-items">
            <h2>Descubre</h2>
            <Link to='/sign-up'>Recursos</Link>
            <Link to='/sign-up'>Links interesantes</Link>
            <Link to='/sign-up'>Tests</Link>
          </div>
        </div>
      </div>
      <section className="social-media">
        <div className="social-media-wrap">
          <div className="footer-logo">
            <Link to='/react-example-website'className="social-logo">
            <img src={Logo} className='logo'/>
            </Link>
          </div>
          <small className="website-rights">Belen Iglesias, 2020</small>
          <div className="social-icons">
            <Link className="social-icon-link facebook"
            to='/react-example-website' target='_blanck' aria-label='Facebook'>
              <i className="fab fa-facebook-f"></i>
            </Link>
            <Link className="social-icon-link instagram"
            to='/react-example-website' target='_blanck' aria-label='Facebook'>
              <i className="fab fa-instagram"></i>
            </Link>
            <Link className="social-icon-link Linked-in"
            to='/react-example-website' target='_blanck' aria-label='Facebook'>
              <i className="fab fa-linkedin-in"></i>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Footer
