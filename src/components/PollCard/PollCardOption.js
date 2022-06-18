import React, { Component } from "react";
import { connect } from "react-redux";
import pollCardStyle from "./PollCard.module.scss";

class PollCardOption extends Component {
  render() {
    const { question } = this.props;
    const { authorAvatarUrl, authorName, optionOne, optionTwo, id } = question;

    return (
      <div className="card">
        <div className="card-header">{authorName} asks:</div>
        <div className="card-content">
          <div className={pollCardStyle["poll"]}>
            <div className={pollCardStyle["avatar"]}>
              <img src={authorAvatarUrl} alt={authorName} />
            </div>
            <div className={pollCardStyle["question"]}>
              <p className={pollCardStyle["title"]}>Would you rather</p>
              <form className="form-control">
                <div className="form-control-input radio">
                  <input
                    type="radio"
                    value="option1"
                    name="option1"
                    id="option1"
                    className="form-radio-input"
                  />
                  <label htmlFor="option1">{optionOne.text}</label>
                </div>
                <div className="form-control-input radio">
                  <input
                    type="radio"
                    value="option2"
                    name="option2"
                    id="option2"
                    className="form-radio-input"
                  />
                  <label htmlFor="option2">{optionTwo.text}</label>
                </div>
                <button className="btn-contained">Submit</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect()(PollCardOption);
