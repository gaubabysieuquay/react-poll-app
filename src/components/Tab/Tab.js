import React, { Component } from "react";
import { connect } from "react-redux";
import PollCard from "../PollCard/PollCard";
import "./Tab.scss";

class Tab extends Component {
  state = {
    activeTab: [],
  };

  render() {
    return (
      <div className="card">
        <div className="tab-list">
          <ol>
            <li>Unanswered Question</li>
            <li>Answered Question</li>
          </ol>
        </div>
        <div className="tab-content">
          {this.props.questionIds.map((id) => (
            <PollCard key={id} id={id} />
          ))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ questions }) => {
  return {
    questionIds: Object.keys(questions).sort(
      (a, b) => questions[b].timestamp - questions[a].timestamp
    ),
  };
};

export default connect(mapStateToProps)(Tab);
