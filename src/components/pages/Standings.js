import React, {Component} from 'react';
import '../../App.scss';
import PageHeader from "../main/PageHeader";
import SocialLinks from "../main/SocialLinks";
import Sponsors from "../main/Sponsors";
import Header from '../../components/common/Header';
import Footer from '../../components/common/Footer';

export default class Standings extends Component {

    componentDidMount() {

      const script = document.createElement("script");

      script.src = "https://api.leaguerepublic.com/l/client/api/cs1.js";
      script.async = true;

      document.body.appendChild(script);

      window.lrcode = '775328754'

    }

    render() {

        return (
            <div className="main">
                <Header />

                <PageHeader title="Standings / Fixtures"/>

                <div className="league-standings">
                    <div id="lrep775328754">Data Loading...</div>
                </div>

                <Sponsors/>

                <SocialLinks />


                <Footer />

            </div>
        )
    };
}
