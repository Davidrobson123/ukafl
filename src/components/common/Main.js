import React, {Component} from 'react';
import '../../App.scss';
import ArrowDark from '../../assets/arrow-object-dark-red.png';
import GooglePlay from '../../assets/google-play.svg';
import AppStore from '../../assets/app-store.svg';
import Background from '../../assets/img-02.jpg';
import Logo1 from '../../assets/logo-1.png';
import Logo2 from '../../assets/logo-2.png';
import videos from '../../assets/UKAFL_Intro_Master.mp4';

export default class Main extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {

  }

  render() {
    
    return (
      <div className="main">
          <header className="section-top-padding background-image text-center">
            <h1 className="text-extra-thin text-white text-s-size-30 text-m-size-40 text-size-50 text-line-height-1 margin-bottom-40 margin-top-130">Save your Time and Keep Calm</h1>
            <p className="text-white">Duis autem vel eum iriure dolor in hendrerit in vulputate velit<br /> esse molestie consequat, vel illum dolore eu feugiat nulla facilisis</p>
            <i className="slow icon-sli-arrow-down text-white margin-top-20 text-size-16"></i>
            <video className="margin-top-20 center intro-vid" loop autoPlay>
              <source src={videos} type="video/mp4"/>
            </video>
              <img className="arrow-object" src={ArrowDark} alt="" />
          </header>

          <section className="section-small-padding background-dark text-center">
            <div className="line">
              <div className="m-10 l-6 xl-4 center">
                <div className="margin">
                  <a className="s-12 m-6 margin-s-bottom" href="/">
                    <img className="full-img right" src={GooglePlay} alt=""/>
                  </a>
                  <a className="s-12 m-6" href="/">
                    <img className="full-img" src={AppStore} alt="" />
                  </a>
                </div>
              </div>
            </div>
          </section>

          <section className="section-top-padding background-white">
            <div className="line text-center">
              <i className="icon-sli-heart text-primary text-size-40"></i>
              <h2 className="text-dark text-size-50 text-m-size-40">Template <b>Features</b></h2>
              <hr className="break background-primary break-small break-center margin-bottom-50" />
            </div>
            <div className="line">
              <div className="margin2x">
                <div className="s-12 m-6 l-4 margin-bottom-60">
                  <div className="float-left">
                    <i className="icon-sli-equalizer text-primary text-size-40 text-line-height-1"></i>
                  </div>
                  <div className="margin-left-60">
                    <h3 className="text-strong text-size-20 text-line-height-1 margin-bottom-20">Unlimited Color Variants</h3>
                    <p>Hendrerit in vulputate duis autem vel eum iriure dolor in velit esse molestie consequat, vel illum dolore nulla facilisis</p>
                    <a className="text-more-info text-primary" href="/">Read more</a>
                  </div>
                </div>
                <div className="s-12 m-6 l-4 margin-bottom-60">
                  <div className="float-left">
                    <i className="icon-sli-layers text-primary text-size-40 text-line-height-1"></i>
                  </div>
                  <div className="margin-left-60">
                    <h3 className="text-strong text-size-20 text-line-height-1 margin-bottom-20">Many Reusable Elements</h3>
                    <p>Hendrerit in vulputate duis autem vel eum iriure dolor in velit esse molestie consequat, vel illum dolore nulla facilisis</p>
                    <a className="text-more-info text-primary" href="/">Read more</a>
                  </div>
                </div>
                <div className="s-12 m-6 l-4 margin-bottom-60">
                  <div className="float-left">
                    <i className="icon-sli-share text-primary text-size-40 text-line-height-1"></i>
                  </div>
                  <div className="margin-left-60">
                    <h3 className="text-strong text-size-20 text-line-height-1 margin-bottom-20">Clean Modern Code</h3>
                    <p>Hendrerit in vulputate duis autem vel eum iriure dolor in velit esse molestie consequat, vel illum dolore nulla facilisis</p>
                    <a className="text-more-info text-primary" href="/">Read more</a>
                  </div>
                </div>
                <div className="s-12 m-6 l-4 margin-m-bottom-60">
                  <div className="float-left">
                    <i className="icon-sli-paper-plane text-primary text-size-40 text-line-height-1"></i>
                  </div>
                  <div className="margin-left-60">
                    <h3 className="text-strong text-size-20 text-line-height-1 margin-bottom-20">Parallax Background</h3>
                    <p>Hendrerit in vulputate duis autem vel eum iriure dolor in velit esse molestie consequat, vel illum dolore nulla facilisis</p>
                    <a className="text-more-info text-primary" href="/">Read more</a>
                  </div>
                </div>
                <div className="s-12 m-6 l-4 margin-m-bottom-60">
                  <div className="float-left">
                    <i className="icon-sli-diamond text-primary text-size-40 text-line-height-1"></i>
                  </div>
                  <div className="margin-left-60">
                    <h3 className="text-strong text-size-20 text-line-height-1 margin-bottom-20">Responsive Layoute</h3>
                    <p>Hendrerit in vulputate duis autem vel eum iriure dolor in velit esse molestie consequat, vel illum dolore nulla facilisis</p>
                    <a className="text-more-info text-primary" href="/">Read more</a>
                  </div>
                </div>
                <div className="s-12 m-6 l-4 margin-m-bottom-60">
                  <div className="float-left">
                    <i className="icon-sli-rocket text-primary text-size-40 text-line-height-1"></i>
                  </div>
                  <div className="margin-left-60">
                    <h3 className="text-strong text-size-20 text-line-height-1 margin-bottom-20">And many more...</h3>
                    <p>Hendrerit in vulputate duis autem vel eum iriure dolor in velit esse molestie consequat, vel illum dolore nulla facilisis</p>
                    <a className="text-more-info text-primary" href="/">Read more</a>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="background-primary full-width">
            <div className="m-12 l-6 xl-5 xxl-4">
              <img className="full-img" src={Background}/>
            </div>
            <div className="m-12 l-6 xl-7 xxl-8">
              <div className="l-12 xl-11 xxl-8 padding-2x">
                <h2 className="text-l-size-40 text-size-50 text-white">Always <b>Nearby</b></h2>
                <p className="margin-bottom">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
                  Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip.</p>
                <img className="margin-left-20 margin-top-30 margin-bottom-60" src="../../assets/start-your-business.svg" alt="" />
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
              <h2 className="text-white text-size-50 text-m-size-40 margin-bottom-20">Get <b>Free Version</b></h2>
              <div className="m-10 l-6 xl-4 center">
                <div className="margin">
                  <a className="s-12 m-6 margin-s-bottom" href="/">
                    <img className="full-img right" src={GooglePlay} alt="" />
                  </a>
                  <a className="s-12 m-6" href="/">
                    <img className="full-img" src={AppStore} alt="" />
                  </a>
                </div>
              </div>
            </div>
          </section>
      </div>
    )
  };
}