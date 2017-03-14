import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import flashMessages from './flashMessages';
import currentUser from './currentUser';
import myQuizzes from './myQuizzes';
import myQuiz from './myQuiz';
import quizzes from './quizzes';

const rootReducer = combineReducers({
  flashMessages,
  currentUser,
  myQuizzes,
  myQuiz,
  quizzes,
  form,
});

export default rootReducer;
