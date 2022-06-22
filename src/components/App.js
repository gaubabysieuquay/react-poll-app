import { Component, Fragment } from "react";
import { connect } from "react-redux";
import LoadingBar from "react-redux-loading";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { handleInitialData } from "../actions/shared.action";
import "./App.scss";
import Login from "./Authentication/Login";
import Register from "./Authentication/Register";
import CreatePoll from "./CreatePoll/CreatePoll";
import LeaderBoard from "./LeaderBoard/LeaderBoard";
import Navbar from "./Navbar/Navbar";
import NoMatch from "./NoMatch/NoMatch";
import PollCardDetail from "./PollCard/PollCardDetail";
import ProtectedRoute from "./ProtectedRoute";
import Tab from "./Tab/Tab";

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }
  render() {
    const { loading } = this.props;
    return (
      <Router>
        <Fragment>
          <LoadingBar />
          <div className="header">
            <p className="title">REACT POLL APP</p>
            <Navbar />
          </div>
          <div className="container">
            <Switch>
              <Route exact path="/login" component={Login} />
              <Route exact path="/register" component={Register} />
              <ProtectedRoute
                path="/"
                component={Tab}
                authUser={loading}
                exact
              />
              <ProtectedRoute
                path="/add"
                component={CreatePoll}
                authUser={loading}
              />
              <ProtectedRoute
                path="/leaderboard"
                component={LeaderBoard}
                authUser={loading}
              />
              <ProtectedRoute
                path="/questions/:id"
                component={PollCardDetail}
                authUser={loading}
              />
              <Route path="/not_found" component={NoMatch} />
              <Route component={NoMatch} />
            </Switch>
          </div>
        </Fragment>
      </Router>
    );
  }
}

const mapStateToProps = ({ authUser }) => {
  return {
    loading: authUser === null,
    authUser,
  };
};

export default connect(mapStateToProps)(App);
