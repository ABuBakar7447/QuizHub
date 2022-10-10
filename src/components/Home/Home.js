import React from 'react';
import './Home.css'

import { useLoaderData } from 'react-router-dom';
import Topics from '../Topics/Topics';

const Home = () => {
    const data = useLoaderData();
    return (
        <div>

            
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