import React, { Component } from "react";
import PollCard from "../PollCard/PollCard";
import "./Tab.scss";

export default class Tab extends Component {
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
          <PollCard />
        </div>
      </div>
    );
  }
}
