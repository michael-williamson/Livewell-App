import {combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';
import googleAuthReducer from './googleAuthReducer';
import fetchFishReducer from './fetchFishReducer';
import createDeleteMessageReducer from './createDeleteMessageReducer';

export default combineReducers({
    form:formReducer,
    Auth:googleAuthReducer,
    fish:fetchFishReducer,
    createDeleteMessage: createDeleteMessageReducer
});