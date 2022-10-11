import React from 'react';
import './QuizOpiton.css'

const QuizOption = (props) => {
    const {quizOption, handleAddToUseDetails} = props
    return (
        <div>
           <button className='quiz-option' onClick={handleAddToUseDetails}>{quizOption}</button> 
        </div>
    );
};

export default QuizOption;