import { React, useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Introduce from './Pages/Introduces/Introduce'
import Quiz from './Pages/Quizies/Quiz'
import './App.css'

function App() {

  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Introduce/>}></Route>
          <Route path='/quiz/:difficulty/:amount' element={<Quiz/>}></Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App
