import React from 'react'
import './Modal.css'

const Modal = ({ score }) => {

    const desc = () => {
        if(score >= 0){
            return(
                <div>
                    iyi deneme
                </div>
            )
        }
    }


    return (
        <div>
            <div>
                <h1 className='modal-title'>Skorun: {score}</h1>
            </div>
            <div  onClick={() => window.location = "/"} className='modal-btn'>Yeniden dene</div>
        </div>
    )
}

export default Modal