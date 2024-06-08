import React from 'react'
import './mainpage.css'
import vite from '../../Images/vitejs-logo.png'

const mainpage = () => {
    return (
        <div className='mainpage'>
            <div className='text-content'>
                <h1 id='vite'>Vite</h1>
                <h1 id='text'>Next Generation<br /> Frontend Tooling</h1>
                <p id='paragraph'>Get ready for a development environment that can finally catch up with you.</p>
                <div className='buttons'>
                    <button className='button purple'>Get Started</button>
                    <button className='button gray'>Why vite?</button>
                    <button className='button gray'>Wiew on Github</button>
                    <button className='button purple'>🎉 ViteConf 23!</button>
                </div>
            </div>
            <div className='mainpage-vite-logo'>
                <div className='vite-background'>
                    <div className='vite-background-aqua'></div>
                    <div className='vite-background-pink'></div>
                    <div className='vite-background-blue'></div>
                </div>
                <img id='mainpage-vite-logo' src={vite} alt="Vite Logo" />
            </div>

        </div>
    )
}

export default mainpage