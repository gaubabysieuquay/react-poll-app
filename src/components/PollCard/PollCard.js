import React, { Component } from 'react';
import { connect } from 'react-redux';
import './PollCard.scss';

class PollCard extends Component {
  // isAnswered = () => {
  //   const { question } = this.props;
  //   const { author, id, optionOne, optionTwo } = question;
  //   const tab = 'Unanswered';
  //   const isAnswered =
  //     optionOne.votes.includes(author) || optionTwo.votes.includes(author);
  //   let poll = {};
  //   if (tab === 'Unanswered' && !isAnswered) {
  //     return (poll = question);
  //   } else {
  //     console.log('Answered');
  //   }
  // };

  render() {
    console.log(this.props);

    const { question } = this.props;
    const { authorAvatarUrl, authorName, id, optionOne, optionTwo } = question;

    return (
      <div className="card">
        <div className="card-header">{authorName} asks:</div>
        <div className="card-content">
          <div className="poll">
            <div className="avatar">
              <img src={authorAvatarUrl} alt={authorName} />
            </div>
            <div className="question">
              <p className="title">Would you rather</p>
              <p>{optionOne.text}</p>
              <p>OR</p>
              <p>{optionTwo.text}</p>
              <button className="btn-outlined">View Poll</button>
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
  // const tab = 'Unanswered';
  // const isAnswered =
  //   question.optionOne.votes.includes(authUser) ||
  //   question.optionTwo.votes.includes(authUser);

  // let answeredPoll = {};
  // let unansweredPoll = {};

  // if (!isAnswered) {
  //   answeredPoll = question;
  // } else {
  //   unansweredPoll = question;
  // }

  // const poll = tab === 'Unanswered' ? answeredPoll : unansweredPoll;

  return {
    authUser,
    question: {
      ...question,
      authorAvatarUrl: author.avatarURL,
      authorName: author.name,
    },
  };
};

export default connect(mapStateToProps)(PollCard);
