import React from 'react';
import './name-intro.css';
import Navbar from '../2- common/navbar';
export function MyName (){
    const webDev = '<webdev/>';
    return (

        <header  id= 'home' className= 'header-section'>
        <nav  className='second-navbar'>
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#work">Work</a></li>
                    <li>Contact</li>
                    <li>Resume</li>
                </ul>
            </nav>
            <div className='name-intro'>
            <h1>Janet Leon</h1>
            <h2>{webDev}</h2>
            </div>
        </header>


        
    )
}

export default MyName;