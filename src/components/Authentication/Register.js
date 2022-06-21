import { Component } from "react";
import { connect } from "react-redux";
import authenticationStyle from "./Authentication.module.scss";

export class Register extends Component {
  state = {
    username: "",
    avatarURL: "",
  };

  handleChangeText = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const { dispatch } = this.props;
    const { username, avatarURL } = this.state;

    dispatch(
      handleAddUser({
        username,
        avatarURL,
      })
    );

    this.props.history.push("/");
  };
  render() {
    return (
      <div className={`card ${authenticationStyle["sign-in-form"]}`}>
        <div
          className={`card-header ${authenticationStyle["sign-in-form-header"]}`}
        >
          Sign Up
        </div>
        <div className="card-content">
          <form className="form-control" onSubmit={this.handleSubmit}>
            <div className="form-control-input text">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                name="username"
                id="username"
                className="form-input-text"
                onChange={this.handleChangeText}
              />
            </div>
            <div className="form-control-input text">
              <label htmlFor="avatarURL">Avatar URL</label>
              <input
                type="text"
                name="avatarURL"
                id="avatarURL"
                className="form-input-text"
                onChange={this.handleChangeText}
              />
            </div>
            <button
              type="submit"
              className={`btn-contained ${authenticationStyle["submit-btn"]}`}
            >
              Sign Up
            </button>
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect()(Register);
