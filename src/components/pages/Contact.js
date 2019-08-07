import React from 'react';
import '../../App.scss';
import PageHeader from "../main/PageHeader";
import SocialLinks from "../main/SocialLinks";
import Sponsors from "../main/Sponsors";
import Header from '../../components/common/Header';
import Footer from '../../components/common/Footer';

const Contact = props => {

    return (
        <div className="main">
            <Header />

            <PageHeader title="Contact Us"/>

            <div className="contactus">
                <div className="form-wrapper">
                    <div>For general enquiries, please use the contact form below, or, email <b>info@ukafl.com</b></div>
                    <br />
                    <form method="POST" action="https://formspree.io/info@ukafl.com">
                        <input type="email" name="email" placeholder="Your email" />
                        <textarea name="message" placeholder="Your Query"></textarea>
                        <button type="submit">Submit</button>
                    </form>
                </div>
            </div>

            <Sponsors/>

            <SocialLinks />

            <Footer />
        </div>
    )
}

export default Contact;
