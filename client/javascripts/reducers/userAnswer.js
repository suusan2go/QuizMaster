import { handleActions } from 'redux-actions';
import * as quizTrialActions from 'actions/quizTrialActionCreators';

const userAnswer = handleActions({
  [quizTrialActions.SUBMIT_QUIZ_TRIAL_ANSWER_SUCCESS]: (state, action) => {
    const {
      content, answer_content, correct,
    } = action.payload;
    return { content, answer_content, correct };
  },
}, { content: '', answer_content: '', correct: false });

export default userAnswer;
