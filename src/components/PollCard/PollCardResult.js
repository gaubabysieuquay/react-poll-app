import { Component } from "react";
import { AiFillLike } from "react-icons/ai";
import { connect } from "react-redux";
import ProgressBar from "../ProgressBar/ProgressBar";
import pollCardStyle from "./PollCard.module.scss";

class PollCardResult extends Component {
  handleProgress = (option, optionVoted, totalVote) => {
    const { authUser } = this.props;
    const optionVotedByUser = option.votes.includes(authUser);

    return (
      <div className={`card ${optionVotedByUser ? "highlight" : "disabled"}`}>
        <div className="card-content">
          <p>{option.text}</p>
          <ProgressBar progress={(optionVoted / totalVote) * 100} height={30} />
          <small>
            {optionVoted} out of {totalVote} votes
          </small>
        </div>
        {optionVotedByUser && (
          <div className={pollCardStyle["voted-tag"]}>
            <AiFillLike />
          </div>
        )}
      </div>
    );
  };

  render() {
    const { question } = this.props;
    const { authorAvatarUrl, authorName, optionOne, optionTwo, id } = question;

    const optionOneVoted = optionOne.votes.length;
    const optionTwoVoted = optionTwo.votes.length;
    const totalVote = optionOneVoted + optionTwoVoted;

    return (
      <div className="card">
        <div className="card-header">{authorName} asks:</div>
        <div className="card-content">
          <div className={pollCardStyle["poll"]}>
            <div className={pollCardStyle["avatar"]}>
              <img src={authorAvatarUrl} alt={authorName} />
            </div>
            <div className={pollCardStyle["question"]}>
              <p className={pollCardStyle["title"]}>Results:</p>
              {this.handleProgress(optionOne, optionOneVoted, totalVote)}
              {this.handleProgress(optionTwo, optionTwoVoted, totalVote)}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ authUser }) => {
  return {
    authUser,
  };
};

export default connect(mapStateToProps)(PollCardResult);
