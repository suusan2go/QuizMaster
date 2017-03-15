import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import { reduxAsyncLoader } from 'redux-async-loader';
import flashMessages from './flashMessages';
import currentUser from './currentUser';
import myQuizzes from './myQuizzes';
import myQuiz from './myQuiz';
import quizzes from './quizzes';
import quizTrial from './quizTrial';
import quizTrialResult from './quizTrialResult';
import userAnswer from './userAnswer';

const rootReducer = combineReducers({
  reduxAsyncLoader,
  flashMessages,
  currentUser,
  myQuizzes,
  myQuiz,
  quizzes,
  quizTrial,
  quizTrialResult,
  userAnswer,
  form,
});

export default rootReducer;
