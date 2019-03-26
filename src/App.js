import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Universe from './Space/Universe/Universe';
import StarSystem from './Space/StarSystem/StarSystem';
import Home from './Home/Home';

import './App.css';

class App extends React.Component {
  componentDidMount() {
    window.particlesJS.load('particles-js', 'assets/particles.json', function() {
      console.log('callback - particles.js config loaded');
    });
  }
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/space" component={Universe} />
        <Route exact path="/yo" component={StarSystem} />
      </Switch>
    );
  }
}

export default App;
