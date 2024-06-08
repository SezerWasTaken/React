import { useState } from 'react'
import './App.css'
import Search from './components/search-co/Search'

function App() {

  const handleOnSearchChange = (searchData) =>{
    console.log(searchData)
  }

  return (
    <div className='container'>
      <Search onSeachChange={handleOnSearchChange}/>
    </div>
  )
}

export default App
