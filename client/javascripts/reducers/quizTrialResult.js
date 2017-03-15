import { handleActions } from 'redux-actions';
import * as quizTrialActions from 'actions/quizTrialActionCreators';

const quizTrialResult = handleActions({
  [quizTrialActions.GET_QUIZ_TRIAL_RESULT_SUCCESS]: (state, action) => {
    const {
      id, answered_questions_count, correct_answers_count,
    } = action.payload;
    return { id, answered_questions_count, correct_answers_count };
  },
}, { answered_questions_count: 0, correct_answers_count: 0 });

export default quizTrialResult;
