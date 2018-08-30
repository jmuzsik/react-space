import React, { Component } from 'react';

import createUniverse from './func';

import './Universe.css';

const increaseDiameter = (self, history) => {
  if (self.state.diameterDivision <= 1) {
    clearInterval(self.state.interval);
    const location = {
      pathname: '/space',
      state: { fromDashboard: true }
    };
    history.push(location);
  } else {
    console.log(self.state);
    createUniverse(self.state.diameterDivision);
    self.setState({ diameterDivision: self.state.diameterDivision / 2 });
  }
};

export default class Universe extends Component {
  state = {
    diameterDivision: 100,
    interval: null
  };
  componentDidMount() {
    createUniverse(this.state.diameterDivision);
    const self = this;
    const { history } = this.props;
    const interval = setInterval(() => increaseDiameter(self, history), 2000);
    this.setState({ interval });
  }
  render() {
    return (
      <div id="universe">
        <canvas className="canvas" />
      </div>
    );
  }
}
