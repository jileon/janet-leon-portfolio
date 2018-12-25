import React from 'react';
import './name-intro.css';
export function MyName (){
    const webDev = '<webdev/>';
    return (

        <React.Fragment>
        <div id= 'home'>

        </div>
        <section className='outline-section intro-section'>
        <header className= 'header-section'>
            <h1>Janet Leon</h1>
            <h2>{webDev}</h2>
        </header>
        </section>
        </React.Fragment>
        
    )
}

export default MyName;