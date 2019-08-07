import React from 'react';
import '../../App.scss';
import LatestPosts from "../main/LatestPosts";
import MainPromo from "../main/MainPromo";
import SocialLinks from "../main/SocialLinks";
import Sponsors from "../main/Sponsors";
import Header from '../../components/common/Header';
import Footer from '../../components/common/Footer';

const Main = props => {

    return (
      <div className="main">
          <Header />

          <MainPromo/>

          <LatestPosts/>

          <Sponsors/>

          <SocialLinks />

          <Footer />

      </div>
    )
}

export default Main;