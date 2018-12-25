import React, { Component } from 'react';
import './App.css';
import MyName from './name-intro';
import DropdownMenu from './dropdown-menu';
import AboutMe from './about';
import Work from './work';


class App extends Component {
  render() {
    return (

      <section className='main'>
      <DropdownMenu/>
     
      <section className="App">
     
       <MyName/>
       <AboutMe/>
       <Work/>

      </section>
      </section>

    );
  }
}

export default App;
