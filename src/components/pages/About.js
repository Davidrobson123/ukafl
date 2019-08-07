import React, {Component} from 'react';
import '../../App.scss';
import PageHeader from "../main/PageHeader";
import SocialLinks from "../main/SocialLinks";
import Sponsors from "../main/Sponsors";
import Header from '../../components/common/Header';
import Footer from '../../components/common/Footer';

export default class About extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {

    }

    render() {

        return (
          <div className="main">
              <Header />

              <PageHeader title="About Us"/>

              <Sponsors/>

              <SocialLinks />

              <Footer />
          </div>
        )
    };
}
