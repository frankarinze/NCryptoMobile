import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import userReducer from './user.reducer';
import authReducer from './auth.reducer';

const RootReducer = combineReducers({
    user: userReducer,
    auth: authReducer,
})

export default RootReducer;


