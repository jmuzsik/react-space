import React, { Component } from 'react';

import MainWrapper from '../reuseable/MainWrapper';
import asyncComponent from '../reuseable/AsyncComponent';

import './Home.css';
import './Loading.css';
import Options from '../options/Options';

const AsyncTable = asyncComponent(() => import('../table/Table.js'));

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      equalityType: 'like'
    };
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  componentDidMount() {
    setTimeout(() => this.setState({ loading: false }), 1500);
  }

  render() {
    return <canvas class="space" />;
  }
}

export default MainWrapper(Home);
