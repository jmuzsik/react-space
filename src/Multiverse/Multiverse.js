import React, { Component } from 'react';

import Explosion from './func';

import './Space.css'

export default class Space extends Component {
  componentDidMount() {
    Explosion();
    setTimeout(() => {
      
    }, 10000)
  }
  render() {
    return <div />;
  }
}
