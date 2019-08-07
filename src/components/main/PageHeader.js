import React from 'react';
import '../../App.scss';
import ArrowDark from '../../assets/arrow-object-dark-red.png';

const PageHeader = props => {

    return (
        <div>
            <div className="section-top-padding background-image text-center front-video">
                <h1 className="text-extra-thin text-white text-s-size-30 text-m-size-40 text-size-50 text-line-height-1 margin-bottom-40"><b>{props.title}</b></h1>
                <img className="arrow-object" src={ArrowDark} alt="" />
            </div>
        </div>
    )
}

export default PageHeader;
