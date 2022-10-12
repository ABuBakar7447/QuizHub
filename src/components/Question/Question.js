import React from 'react';
import './Question.css'
import QuizOption from '../QuizOption/QuizOption';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faEye } from '@fortawesome/free-solid-svg-icons'


const Question = (props) => {
  const { questions, index} = props
  const { correctAnswer, options, question } = questions


  const handleAddToUseDetails = (event) => {
    
    const value = event.target.innerText
    
    if (value === correctAnswer) {
     
      alert('Your answer is correct')
    }
    else {
      
      
      alert('Your answer is incorrect')
      correctAns()
    }
  }

  const answer = correctAnswer;
  

  const correctAns = () =>{
    alert(`Correct answer is: ${answer}`)
  }


  return (
    <div className='quiz-container'>

      <FontAwesomeIcon onClick={correctAns} icon={faEye}></FontAwesomeIcon>

      <h2 className='question-style'><span className='quiz-num'>Quiz-{index}:</span>{question}</h2>
      <div className='option-container'>

        {
          options.map((quizOption, index) => <QuizOption
            key={index}
            handleAddToUseDetails={handleAddToUseDetails}
            quizOption={quizOption}
          ></QuizOption>
          )
        }

      </div>

      {/* <button onClick={()=>handleAddToUseDetails(option)} key={index}>{option} </button>  */}
    </div>
  );
};

export default Question;