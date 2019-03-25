import { combineReducers, } from 'redux';
import notes from './notes';
import nextId from './nextId';

const rootReducer = combineReducers({
  notes,
  nextId,
});

export default rootReducer;