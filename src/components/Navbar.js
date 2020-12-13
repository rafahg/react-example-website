import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { Button } from './Button';
import  Logo from "./logo.png"


function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const closeMobileMenu = () => setClick(false);
  const handleClick = () => setClick(!click);

  const showButton = () => {
    if(window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);
  
  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
        
          <Link to='/react-example-website/' className='navbar-logo' onClick={closeMobileMenu}>
            <img src={Logo} className='logo'/>
           </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className = {click ? 'fas fa-times' : 'fas fa-bars'}/>
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/react-example-website/' className='nav-links' onClick={closeMobileMenu}>
                Inicio
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/services' className='nav-links' onClick={closeMobileMenu}>
                Recursos
              </Link>
            </li>
            {/* <li className='nav-item'>
              <Link to='/products' className='nav-links' onClick={closeMobileMenu}>
                Blog
              </Link>
            </li> */}
            <li className='nav-item'>
              <Link to='/products' className='nav-links' onClick={closeMobileMenu}>
                Contacto
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/sign-up' className='nav-links-mobile' onClick={closeMobileMenu}>
                Acceso Alumnos
              </Link>
            </li>
          </ul>
          {button && <Button buttonStyle='btn--outline'>Acceso Alumnos</Button>}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
