import React, {Component} from 'react';
import '../../App.scss';
import ArrowDark from '../../assets/arrow-object-dark-red.png';

export default class PageHeader extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {

    }

    render() {
        return (
            <div>
                <div className="section-top-padding background-image text-center front-video">
                    <h1 className="text-extra-thin text-white text-s-size-30 text-m-size-40 text-size-50 text-line-height-1 margin-bottom-40 margin-top-70">{this.props.title}</h1>
                    <img className="arrow-object" src={ArrowDark} alt="" />
                </div>
            </div>
        )
    };
}
