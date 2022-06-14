import React, { Component } from "react";
import ProgressBar from "../ProgressBar/ProgressBar";
import { AiFillLike } from "react-icons/ai";
import pollCardStyle from "./PollCard.module.scss";

export default class PollCardDetail extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-header">Someone asks:</div>
        <div className="card-content">
          <div className={pollCardStyle["poll"]}>
            <div className={pollCardStyle["avatar"]}>
              <img
                src="https://demoda.vn/wp-content/uploads/2022/01/avatar-doremon.jpg"
                alt=""
              />
            </div>
            <div className={pollCardStyle["question"]}>
              <p className={pollCardStyle["title"]}>Results:</p>
              <div className="card highlight">
                <div className="card-content">
                  <p>Option 1</p>
                  <ProgressBar progress="50" height={30} />
                  <small>1 out of 2 votes</small>
                </div>
                <div class={pollCardStyle["voted-tag"]}>
                  <AiFillLike />
                </div>
              </div>
              <div className="card disabled">
                <div className="card-content">
                  <p>Option 2</p>
                  <ProgressBar progress="30" height={30} />
                  <small>1 out of 2 votes</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
