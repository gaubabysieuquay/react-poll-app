import React from "react";
import progressBarStyle from "./ProgressBar.module.scss";

const ProgressBar = ({ progress, height }) => {
  return (
    <div className={progressBarStyle["progress"]} style={{ height: height }}>
      <div
        className={progressBarStyle["progress-bar"]}
        style={{ width: `${progress}%` }}
      >
        <span
          className={progressBarStyle["progress-percent"]}
        >{`${progress}%`}</span>
      </div>
    </div>
  );
};

export default ProgressBar;
