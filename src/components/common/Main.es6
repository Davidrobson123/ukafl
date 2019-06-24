import React, {Component} from 'react';
import '../../App.scss';
import Facebook from '../../assets/facebook.png';
import Twitter from '../../assets/twitter.png';
import Background from '../../assets/background-ukafl.png';
import Logo1 from '../../assets/logo-1.png';
import Logo2 from '../../assets/logo-2.png';
import LatestPosts from "../main/LatestPosts";
import MainPromo from "../main/MainPromo";

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

          <section className="background-primary full-width">
            <div className="m-12 l-6 xl-5 xxl-4">
              <img className="full-img" src={Background} />
            </div>
            <div className="m-12 l-6 xl-7 xxl-8">
              <div className="l-12 xl-11 xxl-8 padding-2x">
                <h2 className="text-l-size-40 text-size-50 text-white">Always <b>Nearby</b></h2>
                <p className="margin-bottom">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
                  Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip.</p>
              </div>
            </div>
          </section>

          <section className="section-small-padding background-grey">
            <div className="margin2x">
              <div className="m-6 l-1">
                <img className="margin-bottom" src={Logo1}/>
              </div>
              <div className="m-6 l-1">
                <img className="margin-bottom" src={Logo2}/>
              </div>
              <div className="m-6 l-1">
                <img className="margin-bottom" src={Logo1}/>
              </div>
              <div className="m-6 l-1">
                <img className="margin-bottom" src={Logo1}/>
              </div>
              <div className="m-6 l-1">
                <img className="margin-bottom" src={Logo1}/>
              </div>
              <div className="m-6 l-1">
                <img className="margin-bottom" src={Logo1}/>
              </div>
              <div className="m-6 l-1">
                <img className="margin-bottom" src={Logo1}/>
              </div>
              <div className="m-6 l-1">
                <img className="margin-bottom" src={Logo1}/>
              </div>
              <div className="m-6 l-1">
                <img className="margin-bottom" src={Logo1}/>
              </div>
              <div className="m-6 l-1">
                <img className="margin-bottom" src={Logo1}/>
              </div>
              <div className="m-6 l-1">
                <img className="margin-bottom" src={Logo1}/>
              </div>
              <div className="m-6 l-1">
                <img className="margin-bottom" src={Logo1}/>
              </div>
            </div>
          </section>

          <section className="section-small-padding background-dark text-center">
            <div className="line">
              <h3 className="text-white text-size-50 text-m-size-40 margin-bottom-20">Like us on <b>Social Media</b></h3>
              <div className="m-10 l-6 xl-4 center">
                <div className="margin">
                  <a className="s-12 m-6 margin-s-bottom" href="/">
                    <img className="facebook right" src={Facebook} alt="" />
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