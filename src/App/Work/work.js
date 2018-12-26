import React from 'react';
import Project from './project';
import './work.css';


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
URI="https://learn-spanish-app.herokuapp.com/"
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
number='05'
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
