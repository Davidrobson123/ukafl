import React from 'react';
import '../../App.scss';
import growth from '../../assets/growth.png';
import homing from '../../assets/homing.png';
import warren from '../../assets/warren.png';
import revamped from '../../assets/revamped.png';
import ngp from '../../assets/ngp.png';
import cola from '../../assets/40cola.png';
import fox from '../../assets/fox.png';
import print from '../../assets/print.png';

const Sponsors = props => {

    let sponsors = [growth, homing, warren, revamped, ngp, cola, fox, print];

    return (
      <section className="section-small-padding background-primary sponsors">
        <div className="margin2x sponsors-wrapper">
          {sponsors.map(sponsor => <div key={sponsor} className="l-2 m-2 s-6">
            <img className="margin-bottom sponsor" src={sponsor} alt="sponsor" />
          </div>)}
        </div>
      </section>

    )
}

export default Sponsors;