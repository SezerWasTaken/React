import React, { useEffect, useState } from 'react'
import './Quiz.css'
import * as api from '../../soruapi/api';
import { useParams } from 'react-router-dom'
import Questioncard from '../../Components/questioncards/Questioncard';
import Modal from '../../Components/modal/Modal';

const quiz = () => {

  const { difficulty, amount } = useParams();
  const [questionsData, setQuestionsData] = useState([])
  const [score, setScore] = useState(0);
  const [count, setCount] = useState(0);
  const [modal, setModal] = useState(false);

  useEffect(() => {
    const getData = async () => {
      const data = await api.fetchQuizData(difficulty, amount);
      setQuestionsData(data)
    };
    getData();
  }, [])

  console.log(questionsData, "question")

  return (
    <div className='quiz'>
      {
        modal ? <Modal score={score} /> :
          <Questioncard
            questionsData={questionsData}
            score={score}
            setScore={setScore}
            count={count}
            setCount={setCount}
            modal={modal}
            setModal={setModal}
          />
      }

    </div>
  )
}

export default quiz