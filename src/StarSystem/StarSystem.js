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
            <h1 className="first animated zoomIn">Jerry Muzsik</h1>
            <h3 className="second animated zoomIn">A Developer</h3>
            <p className="fourth animated zoomIn">Check me out on:</p>
            <a className="fifth animated zoomIn" href="https://github.com/jmuzsik">
              GitHub
            </a>
            <p className="seventh animated zoomIn">Thanks for stopping by</p>
            <h2 className="landscape">
              Uh oh, thing's broke. Get back to portrait.
            </h2>
          </div>
        </div>
      </div>
    );
  }
}
