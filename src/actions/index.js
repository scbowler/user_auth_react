import types from './types';
import axios from 'axios';

const BASE_URL = 'http://api.reactprototypes.com';

export function signUp(cred){
    return async (dispatch) => {
        try {
            const response = await axios.post(`${BASE_URL}/signup`, cred);

            localStorage.setItem('token', response.data.token);

            dispatch({
                type: types.SIGN_UP
            });
        } catch(err){
            if(err.response && err.response.data){
                return dispatch({
                    type: types.AUTH_ERROR,
                    error: err.response.data.error
                });
            }

            dispatch({
                type: types.AUTH_ERROR,
                error: 'Error creating new account'
            });
        }
    }
}

export function signIn(cred){
    return async dispatch => {
        try {
            const response = await axios.post(`${BASE_URL}/signin`, cred);

            localStorage.setItem('token', response.data.token);

            dispatch({
                type: types.SIGN_IN
            });
        } catch(err){
            dispatch({
                type: types.AUTH_ERROR,
                error: 'Invalid email and/or password'
            });
        }
    }
}

export function getMovieQuote(){
    return async dispatch => {

        const axiosConfig = {
            headers: {
                authorization: localStorage.getItem('token')
            }
        }

        const response = await axios.get(BASE_URL, axiosConfig);

        dispatch({
            type: types.GET_MOVIE_QUOTE,
            payload: response.data.message
        });
    }
}

export function signOut(){
    localStorage.removeItem('token');

    return {
        type: types.SIGN_OUT
    };
}

export function clearAuthError(){
    return {
        type: types.CLEAR_AUTH_ERROR
    };
}
