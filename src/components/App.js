import React, { Component } from 'react';
import './App.scss';
import Tab from './Tab/Tab';
import Navbar from './Navbar/Navbar';
import PollCardOption from './PollCard/PollCardOption';
import PollCardDetail from './PollCard/PollCardDetail';

export default class App extends Component {
  render() {
    return (
      <div>
        <div className="header">
          <p className="title">REACT POLL APP</p>
          <Navbar />
        </div>
        <div className="container">
          {/* <Tab /> */}
          {/* <PollCardOption /> */}
          <PollCardDetail />
        </div>
      </div>
    );
  }
}
