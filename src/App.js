import React, { useState } from 'react';
import './App.css';

import NewFast from './images/new-fast.jpg';
import Orare from './images/orare.jpg';
import SnowOcean from './images/snow-ocean.jpg';

const App = () => {
  const [togglePic, setTogglePic] = useState(false)
  const [currentPic, setCurrentPic] = useState("")

  const el = (e) => {
    setTogglePic(true)
    setCurrentPic(e.target.id)
  }

  const clearEl = (e) => {
    setTogglePic(false)
    setCurrentPic("")
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
          <img className={(togglePic && currentPic==="new-fast") ? "show" : "hide"} src={NewFast} alt="new fast automatic" id="new-fast" />
          <img className={(togglePic && currentPic==="orare") ? "show" : "hide"} src={Orare} alt="orare" id="orare"/>
          <img className={(togglePic && currentPic==="snow-ocean") ? "show" : "hide"} src={SnowOcean} alt="snow-ocean" id="snow-ocean" />
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
          <h1 className="headline-name" id="snow-ocean" onMouseOver={el} onMouseLeave={clearEl}>Snow Ocean</h1>
          <h1 className="headline-name" id="orare" onMouseOver={el} onMouseLeave={clearEl}>Orare</h1>
        </div>
      </div>
    );
}

export default App;
