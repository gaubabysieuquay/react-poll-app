import { combineReducers } from "redux";
import authUser from "./authUser.reducer";
import users from "./users.reducer";
import questions from "./questions.reducer";

export default combineReducers({
  authUser,
  users,
  questions,
});
