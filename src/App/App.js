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
import TrackVisibility from 'react-on-screen';
AOS.init();
class App extends Component {

  state = {
    navbar: 'navbar'
  }
  componentDidMount(){
    // const about = document.getElementById("about");
    // console.log(about, about.offsetTop)

    // const work = document.getElementById("work");
    // console.log(work, work.offsetTop)

    // const home = document.getElementById("home");
    // console.log(home, home.offsetTop)

      window.addEventListener('scroll', this.handleScroll);
       
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = (e) => {
    if(window.pageYOffset < 320){
      // console.log(window.pageYOffset)
      this.setState({navbar:'navbar-hide'})
    } else {
      this.setState({navbar:'navbar'})
    }
      };
  

      render() {
    return (

      <section onScroll= {()=>console.log('hello')} className='main'>
  
       <MyName/>
       <Navbar class={this.state.navbar}/>

       <AboutMe />

       <Spacer/>
       <Work/>
       <Spacer/>
      <ContactFooter/>

      </section>

    );
  }
}

export default App;
