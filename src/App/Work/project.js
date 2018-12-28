import React from 'react';
import './work.css';

export default function Project(props) {
	return (
	
				<section className='outer-rectangle work-section'>
					<h3 className={props.headerClass}>Projects</h3>
					<section className="inner-rectangle">
					

  <section className='project'>

<div className= 'project-header' >
<h4>{props.number}</h4>
<h4>{props.name}</h4>
<div className= 'project-text'>
<p >
{props.Text}
</p>
<button data-aos="fade"  data-aos-offset="200"
 data-aos-easing="ease-in-sine"  type="button">
  <a
  href={props.URI}
  target="_blank"
  rel="noopener noreferrer"
>
  Visit Site
  </a>
  </button>
  <button  data-aos="fade"  data-aos-offset="200"
 data-aos-easing="ease-in-sine" type="button">
  <a
  href={props.projectURI}
  target="_blank"
  rel="noopener noreferrer"
>
 Try a Demo
  </a>
  </button>
</div>



</div>


<div data-aos="fade-left"  data-aos-offset="300"
 data-aos-easing="ease-in-sine" className= 'project-img'>
<img
  src={props.image}
  alt="newsflash project"
/>
</div>



</section>


					</section>
				</section>


	);
}
