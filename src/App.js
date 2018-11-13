import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Universe from './Universe/Universe';
import StarSystem from './StarSystem/StarSystem';
import Star from './Star/Star'

import './App.css';

const App = () => {
  return (
    <Switch>
      <Route exact path="/" component={Universe} />
      <Route exact path="/boom" component={Star} />
      <Route exact path="/yo" component={StarSystem} />
    </Switch>
  );
};

export default App;
