import {combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';
import googleAuthReducer from './googleAuthReducer';

export default combineReducers({
    form:formReducer,
    Auth:googleAuthReducer
});