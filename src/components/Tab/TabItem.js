import React, { Component } from "react";
import tabStyle from "./Tab.module.scss";

export default class TabItem extends Component {
  handleOnClick = () => {
    const { label, onClickHandle } = this.props;
    onClickHandle(label);
  };

  render() {
    const { activeTab, label } = this.props;

    return (
      <li
        className={activeTab === label ? tabStyle["tab-active"] : null}
        onClick={this.handleOnClick}
      >
        {label}
      </li>
    );
  }
}
