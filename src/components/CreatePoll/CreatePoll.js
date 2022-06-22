import React, { Component } from "react";
import { connect } from "react-redux";
import { handleAddQuestion } from "../../actions/shared.action";
import createPollStyle from "./CreatePoll.module.scss";

class CreatePoll extends Component {
  state = {
    optionOne: "",
    optionTwo: "",
  };

  handleChangeText = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const { dispatch, authUser } = this.props;
    const { optionOne, optionTwo } = this.state;

    dispatch(
      handleAddQuestion({
        optionOneText: optionOne,
        optionTwoText: optionTwo,
        author: authUser,
      })
    );

    this.props.history.push("/");
  };

  render() {
    return (
      <div className="card">
        <div
          className={`card-header ${createPollStyle["create-poll-form-header"]}`}
        >
          Create New Question
        </div>
        <div className="card-content">
          <div className={createPollStyle["create-poll-form-content"]}>
            <p className={createPollStyle["title"]}>Complete the question:</p>
            <p>Would you rather...</p>
            <form className="form-control" onSubmit={this.handleSubmit}>
              <div className="form-control-input text">
                <label htmlFor="option1">Enter option 1</label>
                <input
                  type="text"
                  name="optionOne"
                  id="optionOne"
                  className="form-input-text"
                  onChange={this.handleChangeText}
                  required
                />
              </div>
              <span className="custom-line-break">OR</span>
              <div className="form-control-input text">
                <label htmlFor="option1">Enter option 2</label>
                <input
                  type="text"
                  name="optionTwo"
                  id="optionTwo"
                  className="form-input-text"
                  onChange={this.handleChangeText}
                  required
                />
              </div>

              <button
                type="submit"
                className={`btn-contained ${createPollStyle["submit-btn"]}`}
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ authUser }) => ({ authUser });

export default connect(mapStateToProps)(CreatePoll);
