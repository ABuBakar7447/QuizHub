import React from 'react';
import './Question.css'
import QuizOption from '../QuizOption/QuizOption';

const Question = (props) => {
  const { questions } = props
  const { correctAnswer, options, question } = questions


  const handleAddToUseDetails = (event) => {
    // console.log(event.target.innerText)
    const value = event.target.innerText
    // console.log(typeof(correctAnswer))
    // console.log(typeof(value))
    if (value === correctAnswer) {
      // console.log('True')
      alert('Your answer is correct')
    }
    else {
      // console.log('false')
      alert('Your answer is incorrect')
    }
  }
  return (
    <div className='quiz-container'>
      <h2 className='question-style'>{question}</h2>
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