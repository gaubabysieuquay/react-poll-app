import React, { Component } from "react";
import pollCardStyle from "./PollCard.module.scss";

class PollCardOption extends Component {
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
                  <label htmlFor="option1">Option 1</label>
                </div>
                <div className="form-control-input radio">
                  <input
                    type="radio"
                    value="option2"
                    name="option2"
                    id="option2"
                    className="form-radio-input"
                  />
                  <label htmlFor="option2">Option 2</label>
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

export default PollCardOption;
