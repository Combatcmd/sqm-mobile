import {combineReducers} from 'redux';
import apartments from './Apartments';
import filter from './Filter';

export default combineReducers({apartments, filter});
