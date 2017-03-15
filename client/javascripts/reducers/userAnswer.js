import { handleActions } from 'redux-actions';
import * as userAnswerActions from 'actions/userAnswerActionCreators';

const userAnswer = handleActions({
  [userAnswerActions.GET_USER_ANSWER_SUCCESS]: (state, action) => {
    const {
      content, answer_content, question_content, correct, id, quiz_trial_id,
    } = action.payload;
    return { content, answer_content, question_content, correct, id, quiz_trial_id };
  },
}, { id: '', content: '', answer_content: '', correct: false });

export default userAnswer;
