import { Component } from "react";
import { connect } from "react-redux";
import { setAuthUser } from "../../actions/authUser.action";
import authenticationStyle from "./Authentication.module.scss";

class Login extends Component {
  state = {
    selectedUser: "",
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
    this.props.history.push("/");
  };

  render() {
    const { users } = this.props;

    if (!users.length) {
      return null;
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
