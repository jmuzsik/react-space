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
