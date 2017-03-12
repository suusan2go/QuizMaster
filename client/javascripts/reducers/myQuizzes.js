import { handleActions } from 'redux-actions';
import * as myQuizzesActions from 'actions/myQuizzesActionCreators';

const myQuizzes = handleActions({
  [myQuizzesActions.FETCH_MY_QUIZZES_SUCCESS]: (state, action) => (
    action.payload.quizzes
  ),
}, []);

export default myQuizzes;
