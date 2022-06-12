import React, { Component } from "react";
import { connect } from "react-redux";
import { handleInitialData } from "../actions/shared.action";
import "./App.scss";
import Navbar from "./Navbar/Navbar";
import Tab from "./Tab/Tab";

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
        <div className="container">{this.props.loading ? null : <Tab />}</div>
      </div>
    );
  }
}

const mapStateToProps = ({ authUser }) => {
  return {
    loading: authUser === null,
  };
};

export default connect(mapStateToProps)(App);
