import {CREATE_FISH, DELETE_FISH} from '../actions/types';

export default (state = {}, action) => {
    switch(action.type){
        case CREATE_FISH:
            return {...action.payload};
        case DELETE_FISH:
            return {...action.payload}
        default:
            return state;
    }
}