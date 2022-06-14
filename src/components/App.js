import { Component, Fragment } from "react";
import { connect } from "react-redux";
import LoadingBar from "react-redux-loading";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { handleInitialData } from "../actions/shared.action";
import "./App.scss";
import CreatePoll from "./CreatePoll/CreatePoll";
import Navbar from "./Navbar/Navbar";
import PollCardOption from "./PollCard/PollCardOption";
import Tab from "./Tab/Tab";
import LeaderBoard from "./LeaderBoard/LeaderBoard";

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }
  render() {
    return (
      <Router>
        <Fragment>
          <LoadingBar />
          <div className="header">
            <p className="title">REACT POLL APP</p>
            <Navbar />
          </div>
          <div className="container">
            {this.props.loading === true ? null : (
              <Switch>
                <Route path="/question/:id" component={PollCardOption} />
                <Route path="/leaderboard" component={LeaderBoard} />
                <Route path="/new" component={CreatePoll} />
                <Route path="/" exact component={Tab} />
              </Switch>
            )}
          </div>
        </Fragment>
      </Router>
    );
  }
}

const mapStateToProps = ({ authUser }) => {
  return {
    loading: authUser === null,
  };
};

export default connect(mapStateToProps)(App);
