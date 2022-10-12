import './QuizDetails.css'
import { useLoaderData } from 'react-router-dom';
import Question from '../Question/Question';
import './QuizDetails.css'

const QuizDetails = () => {
    const quizDetails = useLoaderData();
    



    return (
        <div className='quiz-page'>
            <h2>Quiz Topic: <span className='topic-name'>{quizDetails.data.name}</span></h2>
            {
                quizDetails.data.questions.map((questions, index) => <Question
                    index={index+1}
                    
                    key={questions.id}
                    questions={questions}

                >

                </Question>
                )
            }

        </div>
    );
};

export default QuizDetails;