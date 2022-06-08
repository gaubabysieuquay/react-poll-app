import { getInitialData } from '../utils/api';
import { setAuthUser } from './authedUser.action';
import { receiveQuestions } from './questions.action';
import { receiveUsers } from './users.action';

const AUTH_ID = 'tylermcginnis';

export const handleInitialData = () => {
  return (dispatch) => {
    // dispatch(showLoading);
    return getInitialData().then(({ users, questions }) => {
      dispatch(receiveUsers(users));
      dispatch(receiveQuestions(questions));
      dispatch(setAuthUser(AUTH_ID));
      //   dispatch(hideLoading);
    });
  };
};
