import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import flashMessages from './flashMessages';
import currentUser from './currentUser';
import myQuizzes from './myQuizzes';
import myQuiz from './myQuiz';
import quizzes from './quizzes';
import quizTrial from './quizTrial';
import userAnswer from './userAnswer';

const rootReducer = combineReducers({
  flashMessages,
  currentUser,
  myQuizzes,
  myQuiz,
  quizzes,
  quizTrial,
  userAnswer,
  form,
});

export default rootReducer;
