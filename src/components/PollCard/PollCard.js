import React, { Component } from "react";
import "./PollCard.scss";

export default class PollCard extends Component {
  render() {
    return (
      <div>
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
                <p>Question here ?</p>
                <button className="view-poll-btn">View Poll</button>
              </div>
            </div>
          </div>
        </div>
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
                <p>Question here ?</p>
                <button>View Poll</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
