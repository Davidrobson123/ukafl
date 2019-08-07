import React, {Component} from 'react';
import '../../App.scss';
import ArrowDark from '../../assets/arrow-object-dark-red.png';
import YouTube from 'react-youtube';
import SocialLinks from "./SocialLinks";

export default class MainPromo extends Component {

  _onReady(event) {
    event.target.playVideo();
  }

  render() {
      const opts = {
          playerVars: {
              loop: 1,
              autoplay: 1
          }
      };

    return (
      <div>
        <div className="section-top-padding background-image text-center front-video">
          <h1 className="text-extra-thin text-white text-s-size-30 text-m-size-40 text-size-50 text-line-height-1 margin-bottom-40">United Kingdom <br /> American Football League</h1>
            <div className="margin-top-20 center intro-vid">
            <YouTube
                videoId="tHMrtV0txh0"
                opts={opts}
                onEnd={this._onReady}
            />
            </div>
          <img className="arrow-object" src={ArrowDark} alt="" />
        </div>
        <SocialLinks/>
      </div>
    )
  };
}