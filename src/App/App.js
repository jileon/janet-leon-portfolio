import React, { Component } from 'react';
import './App.css';
import MyName from './name-intro/name-intro';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import AboutMe from './About';
import Work from './Work/work';
import Navbar from './2- common/navbar';
import ContactFooter from './Contact/';
import Spacer from './2- common/spacer';
AOS.init();
class App extends Component {
  render() {
    return (

      <section className='main'>
  
       <MyName/>
       <Navbar/>
       <AboutMe/>
       <Spacer/>
       <Work/>
       <Spacer/>
      <ContactFooter/>

      </section>

    );
  }
}

export default App;
