import React, { Component } from "react";
import { IoMdTrophy } from "react-icons/io";
import leaderBoardStyle from "./LeaderBoard.module.scss";
import pollCardStyle from "../PollCard/PollCard.module.scss";

export default class LeaderBoard extends Component {
  render() {
    return (
      <div className={leaderBoardStyle["leaderboard"]}>
        <div className={`card ${leaderBoardStyle["card"]}`}>
          <div className={leaderBoardStyle["trophy"]}>
            <IoMdTrophy />
          </div>
          <div className="card-content">
            <div className={pollCardStyle["poll"]}>
              <div className={pollCardStyle["avatar"]}>
                <img
                  src="https://demoda.vn/wp-content/uploads/2022/01/avatar-doremon.jpg"
                  alt=""
                />
              </div>
              <div className={pollCardStyle["question"]}>
                <p className={pollCardStyle["title"]}>Would you rather</p>
                <div className={leaderBoardStyle["answered-created-container"]}>
                  <p>Answered question</p>
                  <p>7</p>
                </div>
                <hr className={leaderBoardStyle["divider"]} />
                <div className={leaderBoardStyle["answered-created-container"]}>
                  <p>Created question</p>
                  <p>3</p>
                </div>
              </div>
              <div className={leaderBoardStyle["score-container"]}>
                <div className={`card ${leaderBoardStyle["score"]}`}>
                  <div
                    className={`card-header ${leaderBoardStyle["score-header"]}`}
                  >
                    Score
                  </div>
                  <div className="card-content">
                    <p className={leaderBoardStyle["score-text"]}>10</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={`card ${leaderBoardStyle["card"]}`}>
          <div className="card-content">
            <div className={pollCardStyle["poll"]}>
              <div className={pollCardStyle["avatar"]}>
                <img
                  src="https://demoda.vn/wp-content/uploads/2022/01/avatar-doremon.jpg"
                  alt=""
                />
              </div>
              <div className={pollCardStyle["question"]}>
                <p className={pollCardStyle["title"]}>Would you rather</p>
                <div className={leaderBoardStyle["answered-created-container"]}>
                  <p>Answered question</p>
                  <p>7</p>
                </div>
                <hr className={leaderBoardStyle["divider"]} />
                <div className={leaderBoardStyle["answered-created-container"]}>
                  <p>Created question</p>
                  <p>3</p>
                </div>
              </div>
              <div className={leaderBoardStyle["score-container"]}>
                <div className={`card ${leaderBoardStyle["score"]}`}>
                  <div
                    className={`card-header ${leaderBoardStyle["score-header"]}`}
                  >
                    Score
                  </div>
                  <div className="card-content">
                    <p className={leaderBoardStyle["score-text"]}>10</p>
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
