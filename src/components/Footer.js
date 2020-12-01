import React from 'react'
import { Button } from './Button'
import './Footer.css'
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
        <div className="input-areas">
          <form>
            <input type="email" name="email" placeholder='Your Email'/>
            <Button style="btn--outline">Subscribe</Button>
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
            <h2>About Us</h2>
            <Link to='/sign-up'>How It works</Link>
            <Link to='/sign-up'>Testimonials</Link>
            <Link to='/sign-up'>Careers</Link>
            <Link to='/sign-up'>Investors</Link>
          </div>
        </div>
      </div>
      <section className="social-media">
        <div className="social-media-wrap">
          <div className="footer-logo">
            <Link to='/'className="social-logo">
              TRAVEL <i className="fab fa-typo3"></i>
            </Link>
          </div>
          <small className="website-rights">TRAVEL 2020</small>
          <div className="social-icons">
            <Link className="social-icon-link facebook"
            to='/' target='_blanck' aria-label='Facebook'>
              <i className="fab fa-facebook-f"></i>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Footer
