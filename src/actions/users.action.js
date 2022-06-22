import { showLoading, hideLoading } from 'react-redux-loading';
import { _saveUser } from '../utils/_DATA';

export const RECEIVE_USERS = 'RECEIVE_USERS';
export const ADD_ANSWER_TO_USER = 'ADD_ANSWER_TO_USER';
export const ADD_QUESTION_TO_USER = 'ADD_QUESTION_TO_USER';
export const ADD_USER = 'ADD_USER';

export const receiveUsers = (users) => {
  return {
    type: RECEIVE_USERS,
    users,
  };
};

export const addUser = (user) => {
  return {
    type: ADD_USER,
    user,
  };
};

export const addQuestionToUser = (question) => {
  return {
    type: ADD_QUESTION_TO_USER,
    question,
  };
};

export const addAnswerToUser = (authUser, qid, answer) => {
  return {
    type: ADD_ANSWER_TO_USER,
    authUser,
    qid,
    answer,
  };
};

export const handleAddUser = (user) => {
  return (dispatch) => {
    dispatch(showLoading());

    return _saveUser(user)
      .then((newUser) => dispatch(addUser(newUser)))
      .then(() => dispatch(hideLoading()));
  };
};
