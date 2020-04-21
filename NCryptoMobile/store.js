// import axios from 'axios';
// import store from '../../store';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware, compose, bindActionCreators,combineReducers} from 'redux'
import { persistStore, autoRehydrate } from 'redux-persist'
import createAccountFormReducer from './src/reducers/createAccountForm.reducer'
import { createEpicMiddleware } from 'redux-observable'
const epicMiddleware = createEpicMiddleware();
const composeEhnancers = window.__REDUX_DEVTOOLS_EXTENSION__ || compose;

const store = createStore(
    createAccountFormReducer,
    composeEhnancers(
      applyMiddleware(thunk, epicMiddleware),
      autoRehydrate(),
    ),
  )
export default store;

