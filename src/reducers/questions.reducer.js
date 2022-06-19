import {
  ADD_ANSWER_TO_QUESTION,
  RECEIVE_QUESTIONS,
} from "../actions/questions.action";

export default function questions(state = {}, action) {
  switch (action.type) {
    case RECEIVE_QUESTIONS:
      return {
        ...state,
        ...action.questions,
      };

    case ADD_ANSWER_TO_QUESTION:
      const { authUser, qid, answer } = action;

      return {
        ...state,
        [qid]: {
          ...state[qid],
          [answer]: {
            ...state[qid][answer],
            votes: [...state[qid][answer].votes, authUser],
          },
        },
      };

    default:
      return state;
  }
}
