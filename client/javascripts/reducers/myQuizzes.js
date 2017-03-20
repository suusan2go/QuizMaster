import { handleActions } from 'redux-actions';
import * as myQuizzesActions from 'actions/myQuizzesActionCreators';
import * as quizFormActions from 'actions/quizFormActionCreators';
import findIndex from 'lodash/findIndex';

const myQuizzes = handleActions({
  [myQuizzesActions.GET_MY_QUIZZES_SUCCESS]: (state, action) => (
    action.payload.quizzes
  ),
  [quizFormActions.DELETE_QUIZ_SUCCESS]: (state, action) => {
    const index = findIndex(state, { id: action.payload });
    if (index >= 0) {
      return [
        ...state.slice(0, index),
        ...state.slice(index + 1),
      ];
    }
    return state;
  },
}, []);

export default myQuizzes;
