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
  constructor(props) {
    super(props);
    this.state = { visible: false };
  }
  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = e => {
    if (window.pageYOffset > 350) {
      this.setState({ visible: true });
    }
    if (window.pageYOffset < 350) {
      this.setState({ visible: false });
    }
  };

  render() {
    return (
      <>
        <section className="main">
          <Navbar visible={this.state.visible} />
          <MyName />
          <AboutMe />
          <Spacer />
          <Work />
          <ContactFooter />
        </section>
      </>
    );
  }
}

export default App;
