import React, { Component } from 'react';
import './App.css';
import MyName from './name-intro';
import DropdownMenu from './2- common/dropdown-menu';
import AboutMe from './About';
import Work from './Work/work';


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
