import React, { Component } from "react";
import "./PollCard.scss";

export default class PollCardOption extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-header">Someone asks:</div>
        <div className="card-content">
          <div className="poll">
            <div className="avatar">
              <img
                src="https://demoda.vn/wp-content/uploads/2022/01/avatar-doremon.jpg"
                alt=""
              />
            </div>
            <div className="question">
              <p className="title">Would you rather</p>
              <label>
                <input type="radio" value="option1" name="option1" /> Option 1
              </label>
              <label>
                <input type="radio" value="option2" name="option2" /> Option 2
              </label>
              <button className="submit-btn">Submit</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
