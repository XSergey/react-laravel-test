
import { combineReducers } from 'redux';
import {reducer as form} from 'redux-form';
import textReducer from './text_reducer';
const rootReducer = combineReducers({
   form,
   text: textReducer
});
export default rootReducer;