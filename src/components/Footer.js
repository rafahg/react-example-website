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
<<<<<<< HEAD
          Suscríbete a nuestro periódico semanal
        </p>
        <p className="footer-subscription-text">
          Puedes cancelar la suscripción en cualquier momento.
        </p>
        <div className="input-zone">
          <form>
            <input className='footer-input' type="email" name="email" placeholder='Tu Email'/>
            <Link to='/sign-up' className="footer-btn">Suscríbete</Link>
            {/* <Button className="footer-btn" buttonStyle='btn--outline'>Suscribete</Button> */}
=======
          Unete al boletin semanal!
        </p>
        <p className="footer-subscription-text">
          Date de baja cuando quieras.
        </p>
        <div className="input-zone">
          <form>
            <input className='footer-input' type="email" name="email" placeholder='Your Email'/>
            <Button buttonStyle='btn--outline'>Subscribete</Button>
>>>>>>> cfcd50f45b5bef5c565ff5cd3958a4347e3f1bb2
          </form>
        </div>
      </section>
      <div className="footer-links">
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
<<<<<<< HEAD
            <h2>Quien soy</h2>
            <Link to='/sign-up'>Como Funciono</Link>
            <Link to='/sign-up'>Testimonios</Link>
            <Link to='/sign-up'>Bio</Link>
            <Link to='/sign-up'>Contacto</Link>
          </div>
          <div className="footer-link-items">
            <h2>Descubre</h2>
            <Link to='/sign-up'>Comunidad</Link>
            <Link to='/sign-up'>Curiosidades</Link>
            <Link to='/sign-up'>Top 10</Link>
            <Link to='/sign-up'>Mas Votados</Link>
=======
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
>>>>>>> cfcd50f45b5bef5c565ff5cd3958a4347e3f1bb2
          </div>
        </div>
      </div>
      <section className="social-media">
        <div className="social-media-wrap">
          <div className="footer-logo">
          {/* <Link to='/react-example-website/' className='navbar-logo' onClick={closeMobileMenu}>
            <img src={Logo} className='logo'/>
           </Link> */}
            <Link to='/react-example-website'className="social-logo">
            <img src={Logo} className='logo'/>
            </Link>
          </div>
<<<<<<< HEAD
          <small className="website-rights">BELÉN IGLESIAS 2020</small>
=======
          <small className="website-rights">Belen Iglesias, 2020</small>
>>>>>>> cfcd50f45b5bef5c565ff5cd3958a4347e3f1bb2
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
