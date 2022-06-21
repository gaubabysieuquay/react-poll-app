import { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import LoadingBar from 'react-redux-loading';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';
import { handleInitialData } from '../actions/shared.action';
import './App.scss';
import Login from './Authentication/Login';
import CreatePoll from './CreatePoll/CreatePoll';
import LeaderBoard from './LeaderBoard/LeaderBoard';
import Navbar from './Navbar/Navbar';
import NoMatch from './NoMatch/NoMatch';
import PollCardDetail from './PollCard/PollCardDetail';
import Tab from './Tab/Tab';

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
            {this.props.loading === true ? (
              <Route exact path="/login" component={Login} />
            ) : (
              <Switch>
                <Route exact path="/" component={Tab} />
                <Route path="/add" component={CreatePoll} />
                <Route path="/leaderboard" exact component={LeaderBoard} />
                <Route path="/question/:id" component={PollCardDetail} />
                <Route path="*" component={NoMatch} />
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
