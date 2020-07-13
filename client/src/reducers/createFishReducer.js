import {CREATE_FISH, FETCH_FISH} from '../actions/types';

export default (state = {}, action) => {
    switch(action.type){
        case CREATE_FISH:
            return {...state, ...action.payload};
        case FETCH_FISH:
            return [...action.payload];
        default:
            return state;
    }
}