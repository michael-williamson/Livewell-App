import axios from 'axios';
import history from '../history';

import {SIGN_IN,SIGN_OUT,CREATE_FISH,FETCH_FISH,DELETE_FISH} from './types';

export const createFish = (formValues,userId) => async dispatch =>   {
    const idAppended = {...formValues,"id":userId}
   const response = await axios.post('/api/createFish',idAppended);
   dispatch({type:CREATE_FISH,payload: response.data});

   history.push('/view-fish');
}  

export const fetchFish = (userId) => async dispatch =>   {
    const idAppended = {"id":userId}
   const response = await axios.post('/api/fetchFish',idAppended);
   dispatch({type:FETCH_FISH,payload: response.data});

}  

export const deleteFish = (userId,googleId) => async dispatch =>   {
    const idAppended = {"id":userId,googleId}
   const response = await axios.post('/api/deleteFish',idAppended);
   dispatch({type:DELETE_FISH,payload: response.data});
    history.push('/view-fish');
}  

export const signIn = (userId) => {
    return{
        type: SIGN_IN,
        payload: userId
    }
}
  
export const signOut = () => {
    return {
        type: SIGN_OUT
    }
} 