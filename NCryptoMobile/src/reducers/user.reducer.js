import { FETCH_USER, FETCH_USER_SUCCESS, FETCH_USER_FAILURE, LOGIN, LOGOUT } from '../action/index'
import { AsyncStorage } from 'react-native'
import { REHYDRATE } from 'redux-persist/constants'

const initialUserState = {
    isLoading: false,
    loaded: false,
    error: false,
}

export default function userReducer(state = initialUserState, action) {
    switch (action.type) {
        case REHYDRATE:
            return {
                ...action.payload.user,
                isLoading: false,
                loaded: false,
                error: false
            } || {}
        case LOGOUT:
            return {
                ...initialUserState,
                f_name: state.f_name,
                email: state.email,
            }
        case FETCH_USER:
            return {
                ...state,
                isLoading: true,
            }
        case FETCH_USER_SUCCESS:
            AsyncStorage.setItem('user_email', action.payload.email)
            return {
                ...state,
                isLoading: false,
                loaded: true,
                ...action.payload
            }
        case FETCH_USER_FAILURE:
            return {
                ...state,
                isLoading: false,
                loaded: true,
                error: true,
            }

        default:
            return state;
    }
}