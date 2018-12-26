import React from 'react';
import './navbar.css'
export default class Navbar extends React.Component{
    render(){
        return(
            <nav>
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#aboutme">About</a></li>
                    <li><a href="#work">Work</a></li>
                    <li>Contact</li>
                    <li>Resume</li>
                </ul>
            </nav>
        )
    }
}