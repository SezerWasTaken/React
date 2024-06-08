import React from 'react'
import './navbar.css'
import vite from '../../Images/vitejs-logo.png'

const navbar = () => {
    return (
        <div className='navbar'>
            {/* Vite logo */}
            <div className='logo'>
                <img id='logo-img' src={vite} alt="" />
                <h1 id='logo-text'>Vite</h1>
            </div>
            <div className='nav'>
                <div className="nav-items">
                    <ul>
                        <li>Guide</li>
                        <li>Config</li>
                        <li>Plugins</li>
                        <li>Resources</li>
                        <li>Version</li>
                    </ul>
                </div>
                <div className='line'></div>
                <div className='language-option'>
                    <li><i id='languga-select' class="fa-solid fa-globe"></i></li>
                </div>
                <div className='line'></div>
                {/* Social Media Icons */}
                <div className='icons'>
                    <i class="fa-brands fa-x-twitter"></i>
                    <i class="fa-brands fa-discord"></i>
                    <i class="fa-brands fa-github"></i>
                </div>
            </div>

        </div>
    )
}

export default navbar