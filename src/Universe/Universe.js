import React, { Component } from 'react';

import Explosion from './func';

import './Universe.css';

export default class Universe extends Component {
  componentDidMount() {
    Explosion();
    setTimeout(() => {
      const location = {
        pathname: '/boom',
        state: { fromDashboard: true }
      };
      setTimeout(() => {
        document
          .querySelectorAll('.particule')
          .forEach(particule => particule.remove());
      }, 15000);
      this.props.history.push(location);
    }, 5000);
  }
  render() {
    return <div />;
  }
}
