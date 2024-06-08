import React, { useState } from 'react';
import Navbar from './components/Navbar/navbar';
import Mainpage from './components/Mainpage/mainpage';
import Cards from './components/Cards/cards';
import Sponsors from './components/Sponsors/sponsors';
import Footer from './components/footer/footer';
import './App.css';

function App() {

  return (
    <>
      <Navbar></Navbar>
      <Mainpage></Mainpage>
      <Cards></Cards>
      <Sponsors></Sponsors>
      <Footer></Footer>
    </>
  )
}

export default App
