import React from 'react';
import Newsflash from './newsflash';
import './work.css';
import Project from './project';
export default function Work() {
	return (
		<React.Fragment>
			<div id="work" />
			<section className="outline-section ">
	

<Project
class="outer-rectangle work-section"
number='01'
name='Newsflash'
URI="https://newsflashapp.herokuapp.com/"
image= {require("../images/newsflash.png")}
Text= 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.
Pellentesque congue, enim et ornare facilisis, nisl arcu dignissim
quam, ut dictum purus mi vitae felis. Curabitur blandit rhoncus
nibh, eu ullamcorper tortor gravida in. Nunc condimentum ipsum
magna, in volutpat nibh vehicula et.'
/>

<Project
headerClass="header3"
number='02'
name='Learning Spanish'
URI="https://newsflashapp.herokuapp.com/"
image= {require("../images/learning-spanish.png")}
Text= 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.
Pellentesque congue, enim et ornare facilisis, nisl arcu dignissim
quam, ut dictum purus mi vitae felis. Curabitur blandit rhoncus
nibh, eu ullamcorper tortor gravida in. Nunc condimentum ipsum
magna, in volutpat nibh vehicula et.'
/>

<Project
headerClass="header3"
number='03'
name='Knowted'
URI="https://knowted.netlify.com/"
image= {require("../images/knowted.gif")}
Text= 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.
Pellentesque congue, enim et ornare facilisis, nisl arcu dignissim
quam, ut dictum purus mi vitae felis. Curabitur blandit rhoncus
nibh, eu ullamcorper tortor gravida in. Nunc condimentum ipsum
magna, in volutpat nibh vehicula et.'
/>

<Project
headerClass="header3"
number='04'
name='Dig'
URI='http://jleondig.myartsonline.com/'
image= {require("../images/dig.png")}
Text= 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.
Pellentesque congue, enim et ornare facilisis, nisl arcu dignissim
quam, ut dictum purus mi vitae felis. Curabitur blandit rhoncus
nibh, eu ullamcorper tortor gravida in. Nunc condimentum ipsum
magna, in volutpat nibh vehicula et.'
/>

<Project
headerClass="header3"
number='06'
name='California Burrito'
URI='http://jleoncbc.mypressonline.com/'
image= {require("../images/cbcburrito.png")}
Text= 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.
Pellentesque congue, enim et ornare facilisis, nisl arcu dignissim
quam, ut dictum purus mi vitae felis. Curabitur blandit rhoncus
nibh, eu ullamcorper tortor gravida in. Nunc condimentum ipsum
magna, in volutpat nibh vehicula et.'
/>


			</section>
		</React.Fragment>
	);
}

{
	/* <React.Fragment>
<div id="work" />
<section id="myWork" className="outline-section">
  <h3>Work</h3>

  <section className="outer-rectangle-work">
    <section className="inner-work">
      <h4>01</h4>
      <h4>News Flash</h4>
      <img
        src={require("../images/newsflash.png")}
        alt="newsflash project"
      />
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Pellentesque congue, enim et ornare facilisis, nisl arcu dignissim
        quam, ut dictum purus mi vitae felis. Curabitur blandit rhoncus
        nibh, eu ullamcorper tortor gravida in. Nunc condimentum ipsum
        magna, in volutpat nibh vehicula et.
      </p>

      <a
        href="https://newsflashapp.herokuapp.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <button type="button">Visit Site</button>
      </a>
    </section>
  </section>
</section>
</React.Fragment> */
}

// <section className= 'outer-rectangle-work'>
// <section className= 'inner-work'>
// <section className= 'project1'>

//  <h4>02</h4>
//  <h4>Dig</h4>
//  <img  src={require('../images/dig.png')} alt='newsflash project'></img>
//  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque congue,
//      enim et ornare facilisis, nisl arcu dignissim quam, ut dictum purus mi vitae felis.
//       Curabitur blandit rhoncus nibh, eu ullamcorper tortor gravida in. Nunc condimentum
//       ipsum magna, in volutpat nibh vehicula et. </p>

//  <a href='http://jleondig.myartsonline.com/' target="_blank" rel="noopener noreferrer"><button type='button'>Visit Site</button></a>
//  </section>
// </section>
// </section>

//  <section className= 'outer-rectangle-work'>
// <section className= 'inner-work'>
// <section className= 'project1'>

//  <h4>03</h4>
//  <h4>California Burrito Company</h4>
//  <img  src={require('../images/cbcburrito.png')} alt='newsflash project'></img>
//  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque congue,
//      enim et ornare facilisis, nisl arcu dignissim quam, ut dictum purus mi vitae felis.
//       Curabitur blandit rhoncus nibh, eu ullamcorper tortor gravida in. Nunc condimentum
//       ipsum magna, in volutpat nibh vehicula et..</p>

//  <a href='http://jleoncbc.mypressonline.com/' target="_blank" rel="noopener noreferrer"><button type='button'>Visit Site</button></a>
//  </section>
// </section>
// </section>
