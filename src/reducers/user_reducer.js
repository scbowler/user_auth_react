import types from '../actions/types';

const DEFAULT_STATE = {
    auth: false,
    error: ''
};

export default (state = DEFAULT_STATE, action) => {
    switch(action.type){
        case types.SIGN_UP:
        case types.SIGN_IN:
            return { ...state, auth: true, error: '' };
        case types.SIGN_OUT:
            return { auth: false };
        case types.AUTH_ERROR:
            return { auth: false, error: action.error };
        case types.CLEAR_AUTH_ERROR:
            return { ...state, error: '' };
        default:
            return state;
    }
}
