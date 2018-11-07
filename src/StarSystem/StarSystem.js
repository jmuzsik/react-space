import React, { Component } from 'react';

import createStarSystem from './func';

import './StarSystem.css';

export default class StarSystem extends Component {
  componentDidMount() {
    createStarSystem();
  }
  render() {
    return (
      <div id="star-system">
        <div className="container">
          <canvas className="canvas" />
          <h1 className="first">Jerry Muzsik</h1>
          <h3 className="second">A remote developer</h3>
          <p className="third">Front end, back end, I do it all</p>
          <p className="fourth">Check me out on:</p>
          <a className="fifth" href="https://github.com/jmuzsik">
            GitHub
          </a>
          <p className="sixth">I write a lot of code</p>
          <p className="seventh">Everything else is extra.</p>
          <p className="eighth">Godspeed</p>
          <h2 className="landscape">Uh oh, thing's broke. Get back to portrait.</h2>
        </div>
      </div>
    );
  }
}
