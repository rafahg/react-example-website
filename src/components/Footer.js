import React from 'react'
import { Button } from './Button'
import './Footer.css'
import './Button.css'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div className='footer-container'>
      <section className="footer-subscription">
        <p className="footer-subscription-heading">
          Join our great Newsletter
        </p>
        <p className="footer-subscription-text">
          You can unsubscribe at any time.
        </p>
        <div className="input-zone">
          <form>
            <input className='footer-input' type="email" name="email" placeholder='Your Email'/>
            <Button buttonStyle='btn--outline'>Subscribe</Button>
          </form>
        </div>
      </section>
      <div className="footer-links">
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>About Us</h2>
            <Link to='/sign-up'>How It works</Link>
            <Link to='/sign-up'>Testimonials</Link>
            <Link to='/sign-up'>Careers</Link>
            <Link to='/sign-up'>Investors</Link>
          </div>
          <div className="footer-link-items">
            <h2>Discover</h2>
            <Link to='/sign-up'>Best-Places</Link>
            <Link to='/sign-up'>Going with your date?</Link>
            <Link to='/sign-up'>Top 10</Link>
            <Link to='/sign-up'>Most voted</Link>
          </div>
        </div>
      </div>
      <section className="social-media">
        <div className="social-media-wrap">
          <div className="footer-logo">
            <Link to='/react-example-website'className="social-logo">
              TRAVEL <i className="fab fa-typo3"></i>
            </Link>
          </div>
          <small className="website-rights">TRAVEL 2020</small>
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
