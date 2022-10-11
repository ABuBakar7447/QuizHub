import React from 'react';
import { Link } from 'react-router-dom';
import './Topics.css'

const Topics = ({quizTopic}) => {
    const {id,name,logo,total,} =quizTopic
    
    return (
        <div className='topic-details'>
            <img src={logo} alt="" />
            <div className='text-design'>
                <h4>Name:{name} </h4>
                <p>Total Question: {total}</p>
            </div>
            
            
            <Link  to= {`/${id}`} >
                <button className='topic-btn'>Start Quiz</button>
            </Link>
        </div>
        
    );
};

export default Topics;