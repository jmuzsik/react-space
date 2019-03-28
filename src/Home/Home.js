import React, { Component } from 'react';

import './Home.css';

function showImage() {
  const colorOverlay = document.querySelector('.color-overlay');
  const whiteOverlay = document.querySelector('.white-overlay');
  const imgWrapper = document.querySelector('.overlay .img-wrapper');
  let isAnimated = false;
  if (isAnimated) {
    window.TweenLite.killAll();
    whiteOverlay.style.transformOrigin = 'left 50% 0px';
    isAnimated = false;
  } else {
    isAnimated = true;
  }

  window.TweenLite.to(whiteOverlay, 1, {
    scaleX: 0,
    ease: window.TweenLite.defaultEase
  });
  window.TweenLite.fromTo(
    colorOverlay,
    1,
    { scaleX: 1 },
    {
      scaleX: 0,
      ease: window.TweenLite.defaultEase,
      delay: 0.2,
      onComplete: function() {
        whiteOverlay.style.transformOrigin = 'left 50% 0px';
        isAnimated = false;
        imgWrapper.style.visibility = 'visible';
      }
    }
  );
}

function hideImage() {
  const whiteOverlay = document.querySelector('.white-overlay');
  const imgWrapper = document.querySelector('.overlay .img-wrapper');
  let isAnimated = false;
  if (isAnimated) {
    window.TweenLite.killAll();
    isAnimated = false;
    whiteOverlay.style.transformOrigin = 'right';
  } else {
    isAnimated = true;
  }

  window.TweenLite.to(whiteOverlay, 0.5, {
    scaleX: 1,
    ease: window.TweenLite.defaultEase,
    onComplete: function() {
      whiteOverlay.style.transformOrigin = 'right';
      isAnimated = false;
      imgWrapper.style.visibility = 'hidden';
    }
  });
}

export default class Home extends Component {
  componentDidMount() {
    window.particlesJS.load('particles-js', '/assets/particles.json');
    const el = document.querySelector('.name-text');
    const options = {
      size: 200,
      weight: 7,
      rounded: false,
      color: 'white',
      duration: 3,
      delay: [0, .75],
      fade: 1,
      easing: window.d3_ease.easeCubicInOut.ease,
      individualDelays: false
    };

    const nameText = new window.Letters(el, options);

    nameText.show();

    const aboutMeHover = document.querySelector('.btn-text');
    setTimeout(() => {
      aboutMeHover.style.display = 'flex';
    }, 10000);
    aboutMeHover.addEventListener('mouseenter', showImage);
    aboutMeHover.addEventListener('mouseleave', hideImage);
  }
  render() {
    return (
      <div className="home">
        <div id="particles-js" />
        <div className="name-text-container">
          <div className="name-text">jerry muzsik</div>

          <div className="overlay">
            <div className="btn-text">
              <img src="/duck.png" alt="a duck" />
              <hgroup className="speech-bubble">
                <span>Hover Me</span>
              </hgroup>
            </div>
            <div className="overlay-container">
              <div className="color-overlay" />
              <div className="white-overlay" />
              <div className="img-wrapper">
                {/* <img src="http://www.journaldugeek.com/wp-content/blogs.dir/1/files/2015/09/chewie-comic.jpeg" /> */}
                <p>In a galaxy far far away</p>
                <p>In a galaxy far far away</p>
                <p>In a galaxy far far away</p>
                <p>In a galaxy far far away</p>
                <p>In a galaxy far far away</p>
                <p>In a galaxy far far away</p>
              </div>
            </div>
          </div>

          <div className="buttons">
            <div className="space-btn">
              <div className="btn-wrapper__container">
                <div className="btn-inner">
                  <a className="btn-inner__text" href="#">
                    Story
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
