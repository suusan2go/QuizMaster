import { handleActions } from 'redux-actions';
import * as myQuizActions from 'actions/myQuizActionCreators';

const myQuiz = handleActions({
  [myQuizActions.FETCH_MY_Quiz_SUCCESS]: (state, action) => (
    action.payload.quiz
  ),
}, []);

export default myQuiz;
