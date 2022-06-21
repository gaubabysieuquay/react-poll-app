import { AiFillLike } from 'react-icons/ai';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import ProgressBar from '../ProgressBar/ProgressBar';
import pollCardStyle from './PollCard.module.scss';

const PollCardResultProgress = (props) => {
  const { authUser, option, optionVoted, totalVote } = props;
  const optionVotedByUser = option.votes.includes(authUser);
  const progressPercent = Math.round((optionVoted / totalVote) * 100);

  return (
    <div className={`card ${optionVotedByUser ? 'highlight' : 'disabled'}`}>
      <div className="card-content">
        <p>{option.text}</p>
        <ProgressBar progress={progressPercent} height={30} />
        <small>
          {optionVoted} out of {totalVote} votes
        </small>
      </div>
      {optionVotedByUser && (
        <div className={pollCardStyle['voted-tag']}>
          <AiFillLike />
        </div>
      )}
    </div>
  );
};

const mapStateToProps = ({ authUser }) => ({ authUser });

export default withRouter(connect(mapStateToProps)(PollCardResultProgress));
