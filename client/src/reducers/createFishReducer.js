import {CREATE_FISH} from '../actions/types';

export default (state = {}, action) => {
    switch(action.type){
        case CREATE_FISH:
            return {...state, ...action.payload}
        default:
            return state;
    }
}