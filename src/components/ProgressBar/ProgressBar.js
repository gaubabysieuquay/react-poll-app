import React from 'react';
import './ProgressBar.scss';

const ProgressBar = ({ progress, height }) => {
  return (
    <div className="progress" style={{ height: height }}>
      <div className="progress-bar" style={{ width: `${progress}%` }}>
        <span className="progress-percent">{`${progress}%`}</span>
      </div>
    </div>
  );
};

export default ProgressBar;
