import React from 'react';
import '../../App.scss';
import PageHeader from "../main/PageHeader";
import SocialLinks from "../main/SocialLinks";
import Sponsors from "../main/Sponsors";
import Header from '../../components/common/Header';
import Footer from '../../components/common/Footer';

const About = props => {

    return (
      <div className="main">
          <Header />

          <PageHeader title="About Us"/>

          <div className="aboutus">
              <div className="aboutus-wrapper">
              UKAFL was set up to create a range of commercial partnerships that can be used to benefit British American Football.
              Since the introduction of the NFL Games in London focus on American Football has grown with TV Audiences of 24 Million unique viewers however this has not yet trickled down to the British game.
              <br /> <br />
              Our initial project is to provide a media platform for Live streams, this will allow teams to broadcast their games to a worldwide audience. <br />
              We will focus on creating quality content either through our own production team or by publishing other production companies’ content.
              Emphasis will be placed on making the viewing experience one that supporters will deem worthy of paying for. <br /> <br/>
              We will be targeting local businesses to use the streams for advertising their services. <br />
              We plan to spread the word to the UK based NFL fans to come and support their local team.
              </div>
          </div>

          <Sponsors/>

          <SocialLinks />

          <Footer />
      </div>
    )
}

export default About;
