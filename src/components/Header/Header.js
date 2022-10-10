import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../Images/quiz-icons.png'
import './Header.css'

const Header = () => {
    return (

        <div className='navbar-design'>
           <div className='page-name'>
                <img src={logo} alt="" />
                <p>Fitness Club</p>  
            </div> 
            
            <nav>
                <Link to = '/'>Home</Link>
            </nav>
        </div>
        
    );
};

export default Header;