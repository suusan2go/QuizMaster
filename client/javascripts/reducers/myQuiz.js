import { handleActions } from 'redux-actions';
import * as myQuizActions from 'actions/myQuizActionCreators';

const myQuiz = handleActions({
  [myQuizActions.FETCH_MY_QUIZ_SUCCESS]: (state, action) => {
    const { id, title, description, questions } = action.payload;
    return { id, title, description, questions };
  },
}, { id: '', title: '', description: '', questions: [] });

export default myQuiz;
