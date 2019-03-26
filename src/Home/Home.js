import React, { Component } from 'react';

import './Home.css';

export default class Home extends Component {
  componentDidMount() {
    window.particlesJS.load(
      'particles-js',
      '/assets/particles.json',
      function() {
        // console.log('callback - particles.js config loaded');
      }
    );
    var el = document.querySelector('.name-text');
    var options = {
      size: 200,
      weight: 7,
      rounded: false,
      color: 'white',
      duration: 5,
      delay: [0, 0.5],
      fade: 1,
      easing: window.d3_ease.easeCubicInOut.ease,
      individualDelays: false
    };

    var nameText = new window.Letters(el, options);

    nameText.show();
  }
  render() {
    return (
      <div className="home">
        <div id="particles-js" />
        <div className="name-text-container">
          <div className="name-text">jerry muzsik</div>
        </div>
      </div>
    );
  }
}
