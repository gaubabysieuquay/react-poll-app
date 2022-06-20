import { hideLoading, showLoading } from 'react-redux-loading';
import { _saveQuestion } from '../utils/_DATA';

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS';
export const ADD_QUESTION = 'ADD_QUESTION';
export const ADD_ANSWER_TO_QUESTION = 'ADD_ANSWER_TO_QUESTION';

export const receiveQuestions = (questions) => {
  return {
    type: RECEIVE_QUESTIONS,
    questions,
  };
};

const addQuestion = (question) => {
  return {
    type: ADD_QUESTION,
    question,
  };
};

export const addAnswerToQuestion = (authUser, qid, answer) => {
  return {
    type: ADD_ANSWER_TO_QUESTION,
    authUser,
    qid,
    answer,
  };
};

export const handleAddQuestion = (question) => {
  return (dispatch) => {
    dispatch(showLoading());

    return _saveQuestion(question)
      .then(() => dispatch(addQuestion(question)))
      .then(() => dispatch(hideLoading()));
  };
};
