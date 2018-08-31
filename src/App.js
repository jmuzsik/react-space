import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Universe from './Universe/Universe';
import StarSystem from './StarSystem/StarSystem';

import './App.css';
import Explosion from './Explosion/Explosion';
import Star from './Star/Star';

const App = () => {
  return (
    <Switch>
      <Route exact path="/" component={Universe} />
      <Route exact path="/explosion" component={Explosion} />
      <Route exact path="/star" component={Star} />
      <Route exact path="/star-system" component={StarSystem} />
    </Switch>
  );
};

export default App;
