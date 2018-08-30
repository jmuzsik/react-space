import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Space from './Space/Space';

import './App.css';
import Universe from './Universe/Universe';

const App = () => {
  return (
    <Switch>
      <Route exact path="/" component={Universe} />
      <Route exact path="/space" component={Space} />
    </Switch>
  );
};

export default App;
