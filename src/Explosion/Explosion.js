import React, { Component } from 'react';

import explosion from './func';

import './Explosion.css';

export default class Explosion extends Component {
  componentDidMount() {
    setTimeout(() => {
      const location = {
        pathname: '/star-system',
        state: { fromDashboard: true }
      };
      const prevCanvas = document.querySelector('canvas');
      this.props.history.push(location);
      setTimeout(() => {
        prevCanvas.remove();
      }, 8000);
    }, 2000);
    explosion();
  }
  render() {
    return <div />;
  }
}
