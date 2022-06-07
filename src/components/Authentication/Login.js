import React, { Component } from "react";
import "./Authentication.scss";

export default class Login extends Component {
  render() {
    return (
      <div className="card sign-in-form">
        <div className="card-header sign-in-form-header">Sign In</div>
        <div className="card-content">
          <form className="form-control">
            <div className="form-control-input text">
              <label htmlFor="option1">Username</label>
              <input
                type="text"
                name="option1"
                id="option1"
                className="form-input-text"
              />
            </div>
            <div className="form-control-input text">
              <label htmlFor="option1">Password</label>
              <input
                type="text"
                name="option2"
                id="option2"
                className="form-input-text"
              />
            </div>
            <button type="submit" className="btn-contained submit-btn">
              Login
            </button>
          </form>
        </div>
      </div>
    );
  }
}
