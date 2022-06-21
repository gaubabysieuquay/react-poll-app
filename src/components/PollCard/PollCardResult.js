import { Component } from 'react';
import { connect } from 'react-redux';
import pollCardStyle from './PollCard.module.scss';
import PollCardResultProgress from './PollCardResultProgress';

class PollCardResult extends Component {
  render() {
    const { question } = this.props;
    const { authorAvatarUrl, authorName, optionOne, optionTwo } = question;

    const optionOneVoted = optionOne.votes.length;
    const optionTwoVoted = optionTwo.votes.length;
    const totalVote = optionOneVoted + optionTwoVoted;

    return (
      <div className="card">
        <div className="card-header">{authorName} asks:</div>
        <div className="card-content">
          <div className={pollCardStyle['poll']}>
            <div className={pollCardStyle['avatar']}>
              <img src={authorAvatarUrl} alt={authorName} />
            </div>
            <div className={pollCardStyle['question']}>
              <p className={pollCardStyle['title']}>Results:</p>
              <PollCardResultProgress
                option={optionOne}
                optionVoted={optionOneVoted}
                totalVote={totalVote}
              />
              <PollCardResultProgress
                option={optionTwo}
                optionVoted={optionTwoVoted}
                totalVote={totalVote}
              />
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
