import React from 'react';
import './Home.css'
import { useLoaderData } from 'react-router-dom';
import Topics from '../Topics/Topics';

const Home = () => {
    const data = useLoaderData();
    return (
        <div className='headertopic-container'>

        <div className="background-edit">
            <div className="Interface-edit">
                
            <h1>Make Learning Fun.</h1>
            <p>Every learner is motivated to mastery through assessments, lessons, and practice.</p>

            </div>

        </div>

            <div className='topics-container'>
                {
                    data.data.map(quizTopic =><Topics
                    key={quizTopic.id}
                    quizTopic={quizTopic}
                    ></Topics>)
                }

            </div>
            
        </div>
    );
};

export default Home;