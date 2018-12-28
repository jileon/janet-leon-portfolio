import React from 'react';
import Project from './project';
import './work.css';

export default function Work() {
  return (
    <>
      <div id="work" />
      <section className="work-view">
        <section id="work-section" className="outline-section">
          <Project
            number="01"
            name="Newsflash"
            URI="https://newsflashapp.herokuapp.com/"
            gitHubURI="https://github.com/jileon/react-newsFlash-client"
            image={require('../images/newsflash.png')}
            Text="Lorem ipsum dolor sit amet, consectetur adipiscing elit.
Pellentesque congue, enim et ornare facilisis, nisl arcu dignissim
quam, ut dictum purus mi vitae felis. Curabitur blandit rhoncus
nibh, eu ullamcorper tortor gravida in. Nunc condimentum ipsum
magna, in volutpat nibh vehicula et."
          />

          <Project
            headerClass="header3"
            number="02"
            name="Learning Spanish"
            URI="https://learn-spanish-app.herokuapp.com/"
            gitHubURI="https://github.com/jileon/learning-Spanish-react-client"
            image={require('../images/spanish-desk.png')}
            Text="Lorem ipsum dolor sit amet, consectetur adipiscing elit.
Pellentesque congue, enim et ornare facilisis, nisl arcu dignissim
quam, ut dictum purus mi vitae felis. Curabitur blandit rhoncus
nibh, eu ullamcorper tortor gravida in. Nunc condimentum ipsum
magna, in volutpat nibh vehicula et."
          />

          <Project
            headerClass="header3"
            number="03"
            name="Knowted"
            URI="https://knowted.netlify.com/"
            image={require('../images/knowted.gif')}
            demo={true}
            demoURI="https://knowted.netlify.com/demo"
            gitHubURI="https://github.com/jileon/knowted-client"
            Text="Lorem ipsum dolor sit amet, consectetur adipiscing elit.
Pellentesque congue, enim et ornare facilisis, nisl arcu dignissim
quam, ut dictum purus mi vitae felis. Curabitur blandit rhoncus
nibh, eu ullamcorper tortor gravida in. Nunc condimentum ipsum
magna, in volutpat nibh vehicula et."
          />

          <Project
            headerClass="header3"
            number="04"
            name="Dig"
            URI="http://jleondig.myartsonline.com/"
            image={require('../images/dig.png')}
            gitHubURI="https://github.com/jileon/dig-plantNursery"
            Text="Lorem ipsum dolor sit amet, consectetur adipiscing elit.
Pellentesque congue, enim et ornare facilisis, nisl arcu dignissim
quam, ut dictum purus mi vitae felis. Curabitur blandit rhoncus
nibh, eu ullamcorper tortor gravida in. Nunc condimentum ipsum
magna, in volutpat nibh vehicula et."
          />

          <Project
            headerClass="header3"
            number="05"
            name="California Burrito"
            URI="http://jleoncbc.mypressonline.com/"
            gitHubURI="https://github.com/jileon/cbc-restaurant"
            image={require('../images/cbcburrito.png')}
            Text="Lorem ipsum dolor sit amet, consectetur adipiscing elit.
Pellentesque congue, enim et ornare facilisis, nisl arcu dignissim
quam, ut dictum purus mi vitae felis. Curabitur blandit rhoncus
nibh, eu ullamcorper tortor gravida in. Nunc condimentum ipsum
magna, in volutpat nibh vehicula et."
          />
        </section>
      </section>
    </>
  );
}
