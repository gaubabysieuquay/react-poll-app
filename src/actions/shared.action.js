import { hideLoading, showLoading } from "react-redux-loading";
import { getInitialData } from "../utils/api";
import { receiveQuestions } from "./questions.action";
import { receiveUsers } from "./users.action";

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
