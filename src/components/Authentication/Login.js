import { Component } from "react";
import { connect } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import { setAuthUser } from "../../actions/authUser.action";
import authenticationStyle from "./Authentication.module.scss";

class Login extends Component {
  state = {
    selectedUser: "",
    isLogged: false,
  };

  static getDerivedStateFromProps(props, state) {
    if (props.users.length && !state.selectedUser) {
      return { selectedUser: props.users[0].id };
    }

    return null;
  }

  handleOnChange = (e) => {
    this.setState({ selectedUser: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const { selectedUser } = this.state;
    const { dispatch } = this.props;

    dispatch(setAuthUser(selectedUser));
    this.setState({ isLogged: true });
  };

  render() {
    const { users, location } = this.props;
    const { isLogged } = this.state;
    const { from } = location.state || { from: { pathname: "/" } };

    if (!users.length) {
      return null;
    }

    if (isLogged) {
      return <Redirect to={from} />;
    }

    return (
      <div className={`card ${authenticationStyle["sign-in-form"]}`}>
        <div
          className={`card-header ${authenticationStyle["sign-in-form-header"]}`}
        >
          Sign In
        </div>
        <div className="card-content">
          <form className="form-control" onSubmit={this.handleSubmit}>
            <div className="form-control-input text">
              <label htmlFor="username">Username</label>
              <select
                name="username"
                id="username"
                className="form-input-text"
                onChange={this.handleOnChange}
                disabled={!this.props.users}
              >
                {users.map((user) => (
                  <option key={user.id} value={user.id}>
                    {user.name}
                  </option>
                ))}
              </select>
            </div>
            <button
              type="submit"
              className={`btn-contained ${authenticationStyle["submit-btn"]}`}
            >
              Login
            </button>
          </form>
          <div className="card-footer">
            <span>Don't have your account ?</span>
            <Link to="/register" className={authenticationStyle["link"]}>
              Sign up!
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ users }) => {
  const userIds = Object.keys(users).sort((a, b) =>
    users[a].name.split(" ")[0].localeCompare(users[b].name.split(" ")[0])
  );
  return {
    users: userIds.map((userId) => users[userId]),
  };
};

export default connect(mapStateToProps)(Login);
