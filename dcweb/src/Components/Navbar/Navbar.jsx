import React from 'react';
import { Link } from 'react-router-dom';
import roderika from '../../Images/logo.png';
import './Navbar.css';

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="logo">
        <img src={roderika} alt="Roderika logo" />
        <h1>Roderika</h1>
      </div>
      <div className="nav">
        <ul>
          <li><Link to='/'>Ana Sayfa</Link></li>
          <li><Link to='/features'>Özellikler</Link></li>
          <li><Link to='/pricing'>Paketler</Link></li>
          <li><Link to='/contact'>İletişim</Link></li>
        </ul>
        <button className='btn giris-yap'>Login</button>
        <button className='btn uye-ol'>Register</button>
      </div>
    </div>
  );
}

export default Navbar;
