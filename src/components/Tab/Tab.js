import React, { Component } from "react";
import { connect } from "react-redux";
import PollCard from "../PollCard/PollCard";
import tabStyle from "./Tab.module.scss";
import TabItem from "./TabItem";

class Tab extends Component {
  tabItemLabel = ["Unanswered Questions", "Answered Questions"];

  state = {
    activeTab: this.tabItemLabel[0],
  };

  handleTab = (tab) => {
    this.setState({ activeTab: tab });
  };

  render() {
    const { activeTab } = this.state;
    const { answeredIds, unansweredIds } = this.props;

    return (
      <div className="card">
        <div className={tabStyle["tab-list"]}>
          <ol>
            {this.tabItemLabel.map((label) => (
              <TabItem
                activeTab={activeTab}
                label={label}
                key={label}
                onClickHandle={this.handleTab}
              />
            ))}
          </ol>
        </div>
        <div className={tabStyle["tab-content"]}>
          {activeTab === "Answered Questions"
            ? answeredIds.map((id) => <PollCard key={id} id={id} />)
            : unansweredIds.map((id) => <PollCard key={id} id={id} />)}
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ authUser, users, questions }) => {
  const answeredIds = Object.keys(users[authUser].answers);
  const unansweredIds = Object.keys(questions).filter(
    (item) => !answeredIds.includes(item)
  );

  return {
    answeredIds,
    unansweredIds,
    questionIds: Object.keys(questions).sort(
      (a, b) => questions[b].timestamp - questions[a].timestamp
    ),
  };
};

export default connect(mapStateToProps)(Tab);
