import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import pollCardStyle from "./PollCard.module.scss";

class PollCard extends Component {
  handleViewPoll = (e, id) => {
    e.preventDefault();

    if (id) {
      this.props.history.push(`/questions/${id}`);
    }
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
              <p>{optionOne.text}</p>
              <p>OR</p>
              <p>{optionTwo.text}</p>
              <button
                className="btn-outlined"
                onClick={(e) => this.handleViewPoll(e, id)}
              >
                View Poll
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ authUser, users, questions }, { id }) => {
  const question = questions[id];
  const author = question ? users[question.author] : null;

  return {
    authUser,
    question: {
      ...question,
      authorAvatarUrl: author.avatarURL,
      authorName: author.name,
    },
  };
};

export default withRouter(connect(mapStateToProps)(PollCard));
