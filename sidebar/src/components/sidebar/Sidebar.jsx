import React, { useState } from 'react'
import './Sidebar.css'

const Sidebar = () => {
  
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleSidebarOpen = () => {
    setSidebarOpen(true)
  }

  const handleSidebarClose = () => {
    setSidebarOpen(false)
  }

  return (
    <div className='Sidebar'>
      {!sidebarOpen ? (
        <div className="sidebar-icon" onClick={handleSidebarOpen}>
          <i className="fas fa-bars"></i>
        </div>
      ) : (
        <>
        <div className="sidebar-icon" onClick={handleSidebarClose}>
          <i className="fas-fa-times"></i>
        </div>
        <div className="sidebar-items">
          <div className="sidebar-item">
            <i className="fas fa-home"></i>
            <p>Home</p>
          </div>
          <div className="sidebar-item">
            <i className="fas fa-user"></i>
            <p>About</p>
          </div>
          <div className="sidebar-item">
            <i className="fas fa-envelope"></i>
            <p>Contact</p>
          </div>
          <div className="sidebar-item">
            <i className="fas fa-cog"></i>
            <p>Settings</p>
          </div>
        </div>
        </>
      )}
    </div>
  )
}

export default Sidebar