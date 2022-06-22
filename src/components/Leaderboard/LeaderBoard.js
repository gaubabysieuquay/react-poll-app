import { Component } from "react";
import { connect } from "react-redux";
import leaderBoardStyle from "./LeaderBoard.module.scss";
import LeaderBoardItem from "./LeaderBoardItem";

class LeaderBoard extends Component {
  render() {
    const { userListByRank } = this.props;

    return (
      <div className={leaderBoardStyle["leaderboard"]}>
        {userListByRank.map((user) => (
          <LeaderBoardItem user={user} key={user.id} />
        ))}
      </div>
    );
  }
}

const mapStateToProps = ({ users }) => {
  const userList = Object.keys(users)
    .map((user) => users[user])
    .map((user) => {
      const answeredQuestions = Object.keys(user.answers).length;
      const createdQuestions = user.questions.length;

      return {
        ...user,
        answeredQuestions,
        createdQuestions,
        score: answeredQuestions + createdQuestions,
      };
    })
    .sort((a, b) => b.score - a.score);

  return {
    userListByRank: userList.map((user, index) => ({
      ...user,
      rank: ++index,
    })),
  };
};

export default connect(mapStateToProps)(LeaderBoard);
