import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../Images/quiz-icons.png'
import './Header.css'

const Header = () => {
    return (

        <div className='navbar-design'>
           <div className='page-name'>
                <img src={logo} alt="" />
                <p>Quiz Hub</p>  
            </div> 
            
            <nav className='nav-container'>
                
                <Link className='nav-items' to = '/'>Home</Link>
                
                <Link className='nav-items' to = '/statistics'>Statistics</Link>
                <Link className='nav-items' to = '/blogs'>Blog</Link>
                
            </nav>
        </div>
        
    );
};

export default Header;