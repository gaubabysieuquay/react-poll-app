import {
  ADD_ANSWER_TO_USER,
  ADD_QUESTION_TO_USER,
  ADD_USER,
  RECEIVE_USERS,
} from '../actions/users.action';

export default function users(state = {}, action) {
  switch (action.type) {
    case RECEIVE_USERS:
      return {
        ...state,
        ...action.users,
      };

    case ADD_USER:
      return {
        ...state,
        [action.user.id]: action.user,
      };

    case ADD_ANSWER_TO_USER:
      const { authUser, qid, answer } = action;

      return {
        ...state,
        [authUser]: {
          ...state[authUser],
          answers: {
            ...state[authUser].answers,
            [qid]: answer,
          },
        },
      };

    case ADD_QUESTION_TO_USER:
      const { question } = action;

      return {
        ...state,
        [question.author]: {
          ...state[question.author],
          questions: [...state[question.author].questions, question.id],
        },
      };

    default:
      return state;
  }
}
