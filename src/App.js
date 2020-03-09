import React, { useState } from 'react';
import './App.css';

import NewFast from './images/new-fast.jpg';
import Orare from './images/orare.jpg';
import SnowOcean from './images/snow-ocean.jpg';

const App = () => {
  const [togglePic, setTogglePic] = useState(false)

  const el = (e) => {
    if(e.target.id === "new-fast") {
      setTogglePic(true)
  }
}

  const clearEl = (e) => {
    if(e.target.id === "new-fast") {
      setTogglePic(false)
    }
  }

  return (
      <div className="main">
        <div className="main--left">
          <div className="main-btns">
            <p className="main-btns--group">Email</p>
            <p className="main-btns--group">Follow</p>
          </div>
          <h1 className="headline-name">Brent Ahrens</h1>
          <p className="headline-desc">Brent Ahrens is easily the best rapper in the entire world. Memeber of the legendary Hip Hop duo Young Planet his legacy has already been cemented in the world of music.</p>
          <img className={togglePic === true ? "show" : "hide"} src={NewFast} alt="new fast automatic" />
          <img className={togglePic === true ? "show" : "hide"} src={Orare} alt="orare" />
          <img className={togglePic === true ? "show" : "hide"} src={SnowOcean} alt="snow-ocean" />
          <div className="main-bottom">
            <h1 className="headline-name">Rapper</h1>
            <h1 className="headline-name">Writer</h1>
            <h1 className="headline-name">Producer</h1>
          </div>
        </div>
        <div className="main--right">
          <div className="main-btns">
            <p className="main-btns--group">Music</p>
            <p className="main-btns--group">Follow</p>
          </div>
          <h1 className="headline-name" id="new-fast" onMouseOver={el} onMouseLeave={clearEl}>New Fast Automatic</h1>
          <h1 className="headline-name" id="snow-ocean">Snow Ocean</h1>
          <h1 className="headline-name" id="orare">Orare</h1>
        </div>
      </div>
    );
}

export default App;
