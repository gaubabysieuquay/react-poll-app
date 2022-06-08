import React, { Component } from 'react';
import './App.scss';
import Tab from './Tab/Tab';
import Navbar from './Navbar/Navbar';
import PollCardOption from './PollCard/PollCardOption';
import PollCardDetail from './PollCard/PollCardDetail';
import CreatePoll from './CreatePoll/CreatePoll';
import LeaderBoard from './Leaderboard/LeaderBoard';
import Login from './Authentication/Login';
import { handleInitialData } from '../actions/shared.action';
import { connect } from 'react-redux';

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }
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
          {/* <PollCardDetail /> */}
          {/* <CreatePoll /> */}
          {/* <LeaderBoard /> */}
          <Login />
        </div>
      </div>
    );
  }
}

export default connect()(App);
