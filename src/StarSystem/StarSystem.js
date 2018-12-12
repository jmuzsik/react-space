import React, { Component } from 'react';

import createStarSystem from './func';

import './StarSystem.css';

export default class StarSystem extends Component {
  state = {
    finished: false
  };
  componentDidMount() {
    createStarSystem();
  }
  render() {
    return (
      <div id="star-system">
        <div className="container">
          <canvas className="canvas" />
          <div className="selector">
            <h1 className="first animated zoomIn">
              <span>J</span>
              <span>e</span>
              <span>r</span>
              <span>r</span>
              <span>y</span>
              <span> </span>
              <span>M</span>
              <span>u</span>
              <span>z</span>
              <span>s</span>
              <span>i</span>
              <span>k</span>
            </h1>
            <h3 className="second animated zoomIn">
              <span>A</span>
              <span> </span>
              <span>D</span>
              <span>e</span>
              <span>v</span>
              <span>e</span>
              <span>l</span>
              <span>o</span>
              <span>p</span>
              <span>e</span>
              <span>r</span>
            </h3>
            <p className="fourth animated zoomIn">
              <span>C</span>
              <span>h</span>
              <span>e</span>
              <span>c</span>
              <span>k</span>
              <span />
              <span>m</span>
              <span>e</span>
              <span> </span>
              <span>o</span>
              <span>u</span>
              <span>t</span>
              <span> </span>
              <span>o</span>
              <span>n</span>
              <span>:</span>
            </p>
            <a
              className="fifth animated zoomIn"
              href="https://github.com/jmuzsik"
            >
              <span>G</span>
              <span>i</span>
              <span>t</span>
              <span>H</span>
              <span>u</span>
              <span>b</span>
            </a>
            <p className="seventh animated zoomIn">
              <span>T</span>
              <span>h</span>
              <span>a</span>
              <span>n</span>
              <span>k</span>
              <span>s</span>
              <span> </span>
              <span>f</span>
              <span>o</span>
              <span>r</span>
              <span> </span>
              <span>s</span>
              <span>t</span>
              <span>o</span>
              <span>p</span>
              <span>p</span>
              <span>i</span>
              <span>n</span>
              <span>g</span>
              <span> </span>
              <span>b</span>
              <span>y</span>
            </p>
            <h2 className="landscape">
              Uh oh, thing's broke. Get back to portrait.
            </h2>
          </div>
        </div>
      </div>
    );
  }
}
