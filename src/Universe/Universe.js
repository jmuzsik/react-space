import React, { Component } from 'react';

import Explosion from './func';

import './Universe.css';

export default class Universe extends Component {
  componentDidMount() {
    Explosion();
    setTimeout(() => {
      const location = {
        pathname: '/star',
        state: { fromDashboard: true }
      };
      setTimeout(() => {
        document
          .querySelectorAll('.particule')
          .forEach(particule => particule.remove());
      }, 25000);
      this.props.history.push(location);
    }, 2000);
  }
  render() {
    return <div />;
  }
}
