import React, { Component } from 'react';
import './CreatePoll.scss';

class CreatePoll extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-header create-poll-form-header">
          Create New Question
        </div>
        <div className="card-content">
          <div className="create-poll-form-content">
            <p className="title">Complete the question:</p>
            <p>Would you rather...</p>
            <form className="form-control">
              <div className="form-control-input text">
                <label htmlFor="option1">Enter option 1</label>
                <input
                  type="text"
                  name="option1"
                  id="option1"
                  className="form-input-text"
                />
              </div>
              <span className="custom-line-break">OR</span>
              <div className="form-control-input text">
                <label htmlFor="option1">Enter option 2</label>
                <input
                  type="text"
                  name="option2"
                  id="option2"
                  className="form-input-text"
                />
              </div>

              <button type="submit" className="btn-contained submit-btn">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default CreatePoll;
