import { handleActions } from 'redux-actions';
import * as quizTrialActions from 'actions/quizTrialActionCreators';

const quizTrial = handleActions({
  [quizTrialActions.GET_QUIZ_TRIAL_SUCCESS]: (state, action) => {
    const {
      id, next_question, completed, quiz, rest_questions_count, user_answer, questions_count,
    } = action.payload;
    return { id, next_question, completed, quiz, rest_questions_count, user_answer, questions_count };
  },
}, { id: '', quiz: {}, next_question: {}, user_answer: {}, completed: false, rest_questions_count: 0 });

export default quizTrial;
