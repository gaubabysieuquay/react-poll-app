import React, { Component } from 'react';
import './LeaderBoard.scss';

export default class LeaderBoard extends Component {
  render() {
    return (
      <div className="leaderboard">
        <div className="card">
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
                <div className="answered-created-container">
                  <p>Answered question</p>
                  <p>7</p>
                </div>
                <hr className="divider" />
                <div className="answered-created-container">
                  <p>Created question</p>
                  <p>3</p>
                </div>
              </div>
              <div className="score-container">
                <div className="card score">
                  <div className="card-header score-header">Score</div>
                  <div className="card-content">
                    <p className="score-text">10</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="card">
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
                <div className="answered-created-container">
                  <p>Answered question</p>
                  <p>7</p>
                </div>
                <hr className="divider" />
                <div className="answered-created-container">
                  <p>Created question</p>
                  <p>3</p>
                </div>
              </div>
              <div className="score-container">
                <div className="card score">
                  <div className="card-header score-header">Score</div>
                  <div className="card-content">
                    <p className="score-text">10</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
