import React, {Component} from 'react';
import '../../App.scss';
import LatestPosts from "../main/LatestPosts";
import MainPromo from "../main/MainPromo";
import SocialLinks from "../main/SocialLinks";
import Sponsors from "../main/Sponsors";
import Header from '../../components/common/Header';
import Footer from '../../components/common/Footer';

export default class Main extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {

  }

  render() {
    
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
  };
}