import React from 'react';
import './Topics.css'

const Topics = ({quizTopic}) => {
    const {id,name,logo,total,} =quizTopic
    
    return (
        <div className='topic-details'>
            <img src={logo} alt="" />
            <div className='text-design'>
                <h4>name:{name} </h4>
                <p>total question:{total}</p>
            </div>
            
            <button className='topic-btn'>Start Quiz</button>
        </div>
        
    );
};

export default Topics;