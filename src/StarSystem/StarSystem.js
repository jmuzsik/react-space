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
        <canvas className="canvas" />
      </div>
    );
  }
}
