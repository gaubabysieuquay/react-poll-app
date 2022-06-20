import { hideLoading, showLoading } from "react-redux-loading";
import { getInitialData } from "../utils/api";
import { _saveQuestion, _saveQuestionAnswer } from "../utils/_DATA";
import {
  addAnswerToQuestion,
  addQuestion,
  receiveQuestions,
} from "./questions.action";
import {
  addAnswerToUser,
  addQuestionToUser,
  receiveUsers,
} from "./users.action";

export const handleInitialData = () => {
  return (dispatch) => {
    dispatch(showLoading());
    return getInitialData().then(({ users, questions }) => {
      dispatch(receiveUsers(users));
      dispatch(receiveQuestions(questions));
      dispatch(hideLoading());
    });
  };
};

export const handleAddQuestionAnswer = (qid, answer) => {
  return (dispatch, getState) => {
    const { authUser } = getState();

    dispatch(showLoading());

    return _saveQuestionAnswer({
      authUser: authUser,
      qid,
      answer,
    })
      .then(() => {
        dispatch(addAnswerToUser(authUser, qid, answer));
        dispatch(addAnswerToQuestion(authUser, qid, answer));
      })
      .then(() => dispatch(hideLoading()));
  };
};

export const handleAddQuestion = (question) => {
  return (dispatch) => {
    dispatch(showLoading());

    return _saveQuestion(question)
      .then((res) => {
        dispatch(addQuestion(res));
        dispatch(addQuestionToUser(res));
      })
      .then(() => dispatch(hideLoading()));
  };
};
