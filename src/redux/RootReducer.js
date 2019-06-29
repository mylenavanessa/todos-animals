import { combineReducers } from 'redux'
import animalsReducer from './Duck'

const reducers = combineReducers({
    animals: animalsReducer
});

export default reducers;
