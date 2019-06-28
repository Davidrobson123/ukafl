import React, {Component} from 'react';
import '../../App.scss';
import Background from '../../assets/background-ukafl.png';
import LatestPosts from "../main/LatestPosts";
import MainPromo from "../main/MainPromo";
import SocialLinks from "../main/SocialLinks";
import Sponsors from "../main/Sponsors";

export default class Main extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {

  }

  render() {
    
    return (
      <div className="main">

          <MainPromo/>

          <LatestPosts/>

          <Sponsors/>

          <SocialLinks />

      </div>
    )
  };
}