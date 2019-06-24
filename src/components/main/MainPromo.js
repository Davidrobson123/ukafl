import React, {Component} from 'react';
import '../../App.scss';
import ArrowDark from '../../assets/arrow-object-dark-red.png';
import videos from '../../assets/UKAFL_Intro_Master.mp4';
import Facebook from '../../assets/facebook.png';
import Twitter from '../../assets/twitter.png';

export default class MainPromo extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {

  }

  render() {

    return (
      <div>
        <div className="section-top-padding background-image text-center front-video">
          <h1 className="text-extra-thin text-white text-s-size-30 text-m-size-40 text-size-50 text-line-height-1 margin-bottom-40 margin-top-130">Save your Time and Keep Calm</h1>
          <p className="text-white">Duis autem vel eum iriure dolor in hendrerit in vulputate velit<br /> esse molestie consequat, vel illum dolore eu feugiat nulla facilisis</p>
          <i className="slow icon-sli-arrow-down text-white margin-top-20 text-size-16"></i>
          <video className="margin-top-20 center intro-vid" loop autoPlay>
            <source src={videos} type="video/mp4"/>
          </video>
          <img className="arrow-object" src={ArrowDark} alt="" />
        </div>

        <section className="section-small-padding background-dark text-center">
          <h3 className="text-white text-size-40 text-m-size-30 margin-bottom-20">Like us on <b>Social Media</b></h3>
          <div className="line">
            <div className="m-10 l-6 xl-4 center">
              <div className="margin">
                <a className="s-12 m-6 margin-s-bottom" href="/">
                  <img className="facebook right" src={Facebook} alt=""/>
                </a>
                <a className="s-12 m-6" href="/">
                  <img className="twitter" src={Twitter} alt="" />
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  };
}