import { handleActions } from 'redux-actions';
import * as quizzesActions from 'actions/quizzesActionCreators';

const quizzes = handleActions({
  [quizzesActions.GET_QUIZZES_SUCCESS]: (state, action) => (
    action.payload.quizzes
  ),
}, []);

export default quizzes;
