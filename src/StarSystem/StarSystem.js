import React, { Component } from 'react';

import createStarSystem from './func';

import './StarSystem.css';

export default class StarSystem extends Component {
  state = {
    finished: false
  };
  componentDidMount() {
    createStarSystem();
    if (
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      )
    ) {
      setTimeout(() => {
        document.querySelector('.typewriter .first').classList.remove('hidden');
      }, 1000);
      setTimeout(() => {
        document
          .querySelector('.typewriter .second')
          .classList.remove('hidden');
      }, 3500);
      setTimeout(() => {
        document.querySelector('.typewriter .third').classList.remove('hidden');
      }, 6300);
      setTimeout(() => {
        document
          .querySelector('.typewriter .fourth')
          .classList.remove('hidden');
      }, 9200);
      setTimeout(() => {
        document.querySelector('.typewriter .fifth').classList.remove('hidden');
      }, 11200);
      setTimeout(() => {
        document.querySelector('.typewriter .sixth').classList.remove('hidden');
      }, 12500);
      setTimeout(() => {
        document
          .querySelector('.typewriter .seventh')
          .classList.remove('hidden');
      }, 16000);
      setTimeout(() => {
        document
          .querySelector('.typewriter .eighth')
          .classList.remove('hidden');
      }, 18000);
    } else {
      document
        .querySelectorAll('hidden')
        .forEach(el => el.classList.remove('hidden'));
    }
  }
  render() {
    return (
      <div id="star-system">
        <div className="container">
          <canvas className="canvas" />
          <div className="typewriter">
            <h1 className="first hidden">Jerry Muzsik</h1>
            <h3 className="second hidden">A remote developer</h3>
            <p className="third hidden">Web, Mobile, everything</p>
            <p className="fourth hidden">Check me out on:</p>
            <a className="fifth hidden" href="https://github.com/jmuzsik">
              GitHub
            </a>
            <p className="sixth hidden">Always looking for adventure</p>
            <p className="seventh hidden">Sometimes work</p>
            <p className="eighth hidden">Godspeed</p>
            <h2 className="landscape">
              Uh oh, thing's broke. Get back to portrait.
            </h2>
          </div>
        </div>
      </div>
    );
  }
}
