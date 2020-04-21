import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
// import userReducer from './user.reducer';
// import authReducer from './auth.reducer';
// import registerFormReducer from './registerForm.reducer';
// import settingsReducer from './settings.reducer'
// import goalsReducer from './goals.reducer.js'
// import paymentsReducer from './payments.reducer.js'
import createAccountFormReducer  from './createAccountForm.reducer'

const RootReducer = combineReducers({
    IndividualAccount :createAccountFormReducer
})

export default RootReducer;