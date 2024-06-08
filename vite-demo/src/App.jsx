import React, { useState } from 'react';
import Navbar from './components/Navbar/navbar';
import Mainpage from './components/Mainpage/mainpage';
import Cards from './components/Cards/cards';
import './App.css';

function App() {

  return (
    <>
      <Navbar></Navbar>
      <Mainpage></Mainpage>
      <Cards></Cards>
    </>
  )
}

export default App
