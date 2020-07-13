import {combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';
import googleAuthReducer from './googleAuthReducer';
import createFishReducer from './createFishReducer';

export default combineReducers({
    form:formReducer,
    Auth:googleAuthReducer,
    fish:createFishReducer
});