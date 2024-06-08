import React, { useState } from 'react'
import './Introduce.css'
import Dropdown from '../../Components/dropdown/Dropdown'
import {useNavigate} from 'react-router-dom'

const introduce = () => {
  
  const difficulty = ["easy", "medium", "hard"];
  const [difficultyChange, setDifficultyChange] = useState('');
  const navigate = useNavigate();
  const TOTAL_QUESTİONS = 10

  console.log(difficultyChange, "diff");

  const startQuiz = () => {
    if(difficultyChange){
      navigate(`/quiz/${difficultyChange}/${TOTAL_QUESTİONS}`)
    }
  }

  return (
    <div className='introduce'>
      <div className="introduce-container">
        <h1>Sezer Şeker'in Quiz Testine Hoş Geldin</h1>
        <Dropdown data= {difficulty} setDifficultyChange={setDifficultyChange} />
        <div onClick={startQuiz} className="introduce-btn">Start Quiz</div>
      </div>
    </div>
  )
}

export default introduce