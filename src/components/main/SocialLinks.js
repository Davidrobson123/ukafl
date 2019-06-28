import React, {Component} from 'react';
import '../../App.scss';
import Facebook from '../../assets/facebook.png';
import Twitter from '../../assets/twitter.png';
import Youtube from '../../assets/youtube-logo.png';

export default class SocialLinks extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {

  }

  render() {

    return (
      <section className="section-small-padding background-dark text-center">
        <h3 className="text-white text-size-40 text-m-size-30 margin-bottom-20">Like us on <b>Social Media</b></h3>
        <div className="line">
          <div className="m-10 l-6 xl-4 center">
            <div className="margin">
              <a className="s-12 m-4 margin-s-bottom" href="/">
                <img className="facebook right" src={Facebook} alt=""/>
              </a>
              <a className="s-12 m-4" href="/">
                <img className="twitter" src={Twitter} alt="" />
              </a>
              <a className="s-12 m-4" href="/">
                <img className="youtube" src={Youtube} alt="" />
              </a>
            </div>
          </div>
        </div>
      </section>
    )
  };
}