import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Question from '../Question/Question';

const QuizDetails = () => {
    const quizDetails = useLoaderData();
    
    return (
        <div>
            {
               quizDetails.data.questions.map(questions =><Question
               key={questions.id}
               question={questions}
               >

               </Question> )
            }

        </div>
    );
};

export default QuizDetails;