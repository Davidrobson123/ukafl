import React from 'react';
import img1 from '../../assets/videos/sandwell-vikings.jpg';
import img2 from '../../assets/videos/Predictions-playoff.jpg';
import img3 from '../../assets/videos/Recap.jpg';
import img4 from '../../assets/videos/armed-forces-main.jpg';
import img5 from '../../assets/videos/armed-forces-youth.jpg';
import img6 from '../../assets/videos/rams-ekp.jpg';
import img7 from '../../assets/videos/vikings-rams.jpg';
import img8 from '../../assets/videos/vikings-ekp.jpg';
import img9 from '../../assets/videos/leicester-edinburgh.jpg';
import img10 from '../../assets/videos/vikings-shropshire.jpg';
import img11 from '../../assets/videos/vikings-roughnecks.jpg';
import img12 from '../../assets/videos/leicester-tam.jpg';

import '../../App.scss';


const Videos = () => {



  return (
    <div className="posts">
      <h1 className="text-white text-size-60 text-m-size-30 margin-bottom-20 text-center"><b>LIVE GAMES</b> AND CONTENT</h1>
      <div className="row">
        <div className="column">
          <a><img src={img1} /></a>
          <a href={'https://youtu.be/2EDOGrXvrQg'} ><img src={img2} /></a>
          <a href={'https://youtu.be/msDvWXujl_c'} ><img src={img9} /></a>
        </div>
        <div className="column">
          <a href={'https://youtu.be/GLZHKv7-W4U'} ><img src={img3} /></a>
          <a href={'https://youtu.be/p7nspaI7qsg'} ><img src={img4} /></a>
          <a href={'https://youtu.be/vAVfpFjPI9U'} ><img src={img10} /></a>
        </div>
        <div className="column">
          <a href={'https://youtu.be/t7E3SHjgYZk'} ><img src={img5} /></a>
          <a href={'https://youtu.be/YMQ2NyEAC1I'} ><img src={img6} /></a>
          <a href={'https://youtu.be/6GPk0noXYDE'} ><img src={img11} /></a>
        </div>
        <div className="column">
          <a href={'https://youtu.be/NobrY8FXuzY'} ><img src={img7} /></a>
          <a href={'https://youtu.be/Hn5TMYJmDcc'} ><img src={img8} /></a>
          <a href={'https://youtu.be/V3twzw_uEMA'} ><img src={img12} /></a>
        </div>
      </div>
    </div>
  );
};

export default Videos;