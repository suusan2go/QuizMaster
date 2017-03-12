import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import flashMessages from './flashMessages';
import currentUser from './currentUser';
import myQuizzes from './myQuizzes';

const rootReducer = combineReducers({
  flashMessages,
  currentUser,
  myQuizzes,
  form,
});

export default rootReducer;
