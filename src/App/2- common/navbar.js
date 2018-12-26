import React from 'react';
import './navbar.css'
export default class Navbar extends React.Component{
    render(){
        return(
            <nav>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Work</li>
                    <li>Contact</li>
                    <li>Resume</li>
                </ul>
            </nav>
        )
    }
}