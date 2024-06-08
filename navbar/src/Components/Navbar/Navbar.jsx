import React, { useState } from 'react';
import './Navbar.css'

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className='navbar'>
      <div className='navbar-brand'>
        <h1>SezerYazılım A.Ş</h1>
      </div>
      <div className='menu' onClick={() => {
        setMenuOpen(!menuOpen);
      }}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div className='navbar-items' id={menuOpen ? "open" : ""}>
        <ul>
          <li>Ana Sayfa</li>
          <li>Faaliyetlerimiz</li>
          <li>Hakkımızda</li>
          <li>İletişim</li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar