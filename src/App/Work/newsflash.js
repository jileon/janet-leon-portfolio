import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();
export default class  Newsflash extends React.Component {


  render(){
  return (
    <section  className="project">

    <div className= 'project-header' >
    <h4>01</h4>
    <h4>News Flash</h4>
    <div className= 'project-text'>
    <p >
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Pellentesque congue, enim et ornare facilisis, nisl arcu dignissim
      quam, ut dictum purus mi vitae felis. Curabitur blandit rhoncus
      nibh, eu ullamcorper tortor gravida in. Nunc condimentum ipsum
      magna, in volutpat nibh vehicula et.
    </p>
    <button type="button">
      <a
      href="https://newsflashapp.herokuapp.com/"
      target="_blank"
      rel="noopener noreferrer"
    >
      Visit Site
      </a>
      </button>
    </div>
  
  

    </div>


    <div data-aos="fade-left" className= 'project-img'>
    <img
      src={require("../images/newsflash.png")}
      alt="newsflash project"
    />
    </div>
  


  </section>
  )
  }
}