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
          <div className="other-stuff">
            <p>
              Hi, i'm Jerry. I was a cook for a while. Then a programmer. Now, I
              am preparing to do a PhD in physics.
            </p>
            <p>May peace be with you,</p>
            <a
              className="email"
              href="mailto:jerrymuzsik@gmail.com?subject=Padawan, I must say something to you."
            >
              JJ Muzsik
            </a>
          </div>
          <div className="selector">
            <a
              className="first animated zoomIn"
              onClick={() => this.props.history.push('/')}
            >
              <span>G</span>
              <span>o</span>
              <span>&nbsp;&nbsp;</span>
              <span>B</span>
              <span>a</span>
              <span>c</span>
              <span>k</span>
            </a>
            <h2 className="landscape">
              Uh oh, thing's broke. Get back to portrait.
            </h2>
          </div>
        </div>
      </div>
    );
  }
}
