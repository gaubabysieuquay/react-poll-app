import { Component } from "react";
import { connect } from "react-redux";
import PollCardOption from "./PollCardOption";
import PollCardResult from "./PollCardResult";

export class PollCardDetail extends Component {
  render() {
    const { isAnswered, question } = this.props;

    return (
      <div>
        {isAnswered ? (
          <PollCardResult question={question} />
        ) : (
          <PollCardOption question={question} />
        )}
      </div>
    );
  }
}

const mapStateToProps = ({ authUser, users, questions }, { match }) => {
  const pollId = match.params.id;
  const question = questions[pollId];
  const author = question ? users[question.author] : null;
  const isAnswered = Object.keys(users[authUser].answers).includes(pollId);

  return {
    isAnswered,
    question: {
      ...question,
      authorAvatarUrl: author.avatarURL,
      authorName: author.name,
    },
  };
};

export default connect(mapStateToProps)(PollCardDetail);
