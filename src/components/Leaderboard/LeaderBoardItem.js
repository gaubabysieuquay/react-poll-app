import React from 'react';
import { connect } from 'react-redux';
import { IoMdTrophy } from 'react-icons/io';
import leaderBoardStyle from './LeaderBoard.module.scss';
import pollCardStyle from '../PollCard/PollCard.module.scss';

const LeaderBoardItem = (props) => {
  const { user } = props;

  return (
    <div className={`card ${user.rank <= 3 ? leaderBoardStyle['card'] : ''}`}>
      {user.rank <= 3 && (
        <div
          className={`${leaderBoardStyle['trophy']} ${
            leaderBoardStyle[`top-${user.rank}`]
          }`}
        >
          <IoMdTrophy />
        </div>
      )}
      <div className="card-content">
        <div className={pollCardStyle['poll']}>
          <div className={pollCardStyle['avatar']}>
            <img src={user.avatarURL} alt={user.name} />
          </div>
          <div className={pollCardStyle['question']}>
            <p className={pollCardStyle['title']}>{user.name}</p>
            <div className={leaderBoardStyle['answered-created-container']}>
              <p>Answered question</p>
              <p>{user.answeredQuestions}</p>
            </div>
            <hr className={leaderBoardStyle['divider']} />
            <div className={leaderBoardStyle['answered-created-container']}>
              <p>Created question</p>
              <p>{user.createdQuestions}</p>
            </div>
          </div>
          <div className={leaderBoardStyle['score-container']}>
            <div className={`card ${leaderBoardStyle['score']}`}>
              <div
                className={`card-header ${leaderBoardStyle['score-header']}`}
              >
                Score
              </div>
              <div className="card-content">
                <p className={leaderBoardStyle['score-text']}>{user.score}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps)(LeaderBoardItem);
