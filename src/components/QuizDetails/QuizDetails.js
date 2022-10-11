import './QuizDetails.css'
import { useLoaderData } from 'react-router-dom';
import Question from '../Question/Question';

const QuizDetails = () => {
    const quizDetails = useLoaderData();



    return (
        <div className='quiz-page'>
            {
                quizDetails.data.questions.map((questions, index) => <Question
                    index={index}
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