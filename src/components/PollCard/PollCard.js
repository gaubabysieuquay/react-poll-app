import React, { Component } from "react";
import { connect } from "react-redux";
import "./PollCard.scss";

class PollCard extends Component {
  render() {
    console.log(this.props);
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
              <p>Question here ?</p>
              <button className="btn-outlined">View Poll</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ authUser, user, questions }, { id }) => {
  const question = questions[id];

  return {
    authUser,
    question: {},
  };
};

export default connect()(PollCard);
