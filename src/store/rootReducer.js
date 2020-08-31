import { combineReducers } from 'redux';

// reducers
import { dummyReducer } from './modules/dummy';

export default combineReducers({
  dummy: dummyReducer,
});
