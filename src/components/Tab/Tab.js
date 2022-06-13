import React, { Component } from "react";
import { connect } from "react-redux";
import PollCard from "../PollCard/PollCard";
import "./Tab.scss";
import TabItem from "./TabItem";

class Tab extends Component {
  tabItemLabel = ["Unanswered Questions", "Answered Questions"];

  state = {
    activeTab: "",
  };

  handleTab = () => {};

  render() {
    const { questionIds } = this.props;
    const filterByTab = (tab) => {};
    return (
      <div className="card">
        <div className="tab-list">
          <ol>
            {this.tabItemLabel.map((label) => (
              <TabItem label={label} />
            ))}
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
