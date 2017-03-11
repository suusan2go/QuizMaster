import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import flashMessages from './flashMessages';
import currentUser from './currentUser';

const rootReducer = combineReducers({
  flashMessages,
  currentUser,
  form,
});

export default rootReducer;
