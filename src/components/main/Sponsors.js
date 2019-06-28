import React, {Component} from 'react';
import '../../App.scss';
import growth from '../../assets/growth.png';
import homing from '../../assets/homing.png';
import warren from '../../assets/warren.png';
import revamped from '../../assets/revamped.png';
import ngp from '../../assets/ngp.png';
import cola from '../../assets/40cola.png';


export default class Sponsors extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {

  }

  render() {

    let sponsors = [growth, homing, warren, revamped, ngp, cola];

    return (
      <section className="section-small-padding background-primary">
        <div className="margin2x">
          {sponsors.map(sponsor => <div className="m-4 l-2">
            <img className="margin-bottom sponsor" src={sponsor}/>
          </div>)}
        </div>
      </section>

    )
  };
}