import types from './types';

export function changeAuth(auth){
    return {
        type: types.CHANGE_AUTH,
        auth: auth
    }
}
