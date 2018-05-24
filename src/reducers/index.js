import { combineReducers } from 'redux';
import userReducer from './user_reducer';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
    user: userReducer,
    form: formReducer
});

export default rootReducer;
