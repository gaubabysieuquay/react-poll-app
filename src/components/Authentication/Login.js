import React, { Component } from 'react';
import './Authentication.scss';

export default class Login extends Component {
  render() {
    return (
      <div className="card sign-in-form">
        <div className="card-header sign-in-form-header">Sign In</div>
        <div className="card-content">
          <form className="form-control">
            <div className="form-control-input text">
              <label htmlFor="username">Username</label>
              <select name="username" id="username" className="form-input-text">
                <option value="user1">User1</option>
                <option value="user2">User2</option>
              </select>
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
