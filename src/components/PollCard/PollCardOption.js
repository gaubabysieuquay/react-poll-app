import React, { Component } from "react";
import { connect } from "react-redux";
import { handleAddQuestionAnswer } from "../../actions/shared.action";

import pollCardStyle from "./PollCard.module.scss";

class PollCardOption extends Component {
  state = {
    selectedOption: "optionOne",
  };

  handleChangeOption = (e) => {
    this.setState({ selectedOption: e.target.value });
  };

  handleSubmit = (e, id) => {
    e.preventDefault();

    const { selectedOption } = this.state;
    const { dispatch } = this.props;

    dispatch(handleAddQuestionAnswer(id, selectedOption));

    this.setState(() => ({
      selectedOption: "",
    }));
  };

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
              <form
                className="form-control"
                onSubmit={(e) => this.handleSubmit(e, id)}
              >
                <div className="form-control-input radio">
                  <input
                    type="radio"
                    value="optionOne"
                    name="optionOne"
                    id="optionOne"
                    className="form-radio-input"
                    onChange={this.handleChangeOption}
                    checked={this.state.selectedOption === "optionOne"}
                  />
                  <label htmlFor="optionOne">{optionOne.text}</label>
                </div>
                <div className="form-control-input radio">
                  <input
                    type="radio"
                    value="optionTwo"
                    name="optionTwo"
                    id="optionTwo"
                    className="form-radio-input"
                    onChange={this.handleChangeOption}
                    checked={this.state.selectedOption === "optionTwo"}
                  />
                  <label htmlFor="optionTwo">{optionTwo.text}</label>
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
