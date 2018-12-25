import React from 'react';

export default function  Newsflash (){
  return (
    <section className="project">

    <div className= 'project-text' >
    <h4>01</h4>
    <h4>News Flash</h4>
    <p>
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


    <div className= 'project-img'>
    <img
      src={require("../images/newsflash.png")}
      alt="newsflash project"
    />
    </div>
  


  </section>
  )

}