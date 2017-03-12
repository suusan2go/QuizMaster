import { handleActions } from 'redux-actions';
import * as myQuizActions from 'actions/myQuizActionCreators';
import * as questionFormActions from 'actions/questionFormActionCreators';

const myQuiz = handleActions({
  [myQuizActions.FETCH_MY_QUIZ_SUCCESS]: (state, action) => {
    const { id, title, description, questions } = action.payload;
    return { id, title, description, questions };
  },
  [questionFormActions.DELETE_QUESTION]: (state, action) => {
    const newQuestions = state.questions.filter(q => q.id !== parseInt(action.payload, 10));
    return {
      ...state,
      questions: newQuestions,
    };
  },
}, { id: '', title: '', description: '', questions: [] });

export default myQuiz;
