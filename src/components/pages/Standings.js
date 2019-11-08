import React, {Component} from 'react';
import '../../App.scss';
import PageHeader from "../main/PageHeader";
import SocialLinks from "../main/SocialLinks";
import Sponsors from "../main/Sponsors";
import Header from '../../components/common/Header';
import Footer from '../../components/common/Footer';

export default class Standings extends Component {


    render() {

        return (
            <div className="main">
                <Header />

                <PageHeader title="Standings / Fixtures"/>

                <div className="posts">
                <h1 className="text-white text-size-60 text-m-size-30 margin-bottom-20 text-center"><b>COMING</b> SOON...</h1>
                </div>

                <Sponsors/>

                <SocialLinks />


                <Footer />

            </div>
        )
    };
}
