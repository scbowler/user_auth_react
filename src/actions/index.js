import types from './types';
import axios from 'axios';

const BASE_URL = 'http://api.reactprototypes.com';

export function signUp(cred){
    return async (dispatch) => {
        const response = await axios.post(`${BASE_URL}/signup`, cred);

        console.log('Sign Up Response:', response);
    }
}
