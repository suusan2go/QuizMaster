import { combineReducers } from 'redux';
import flashMessages from './flashMessages';
import currentUser from './currentUser';

const rootReducer = combineReducers({
  flashMessages,
  currentUser,
});

export default rootReducer;
