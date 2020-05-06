import {
    LOGIN,
    LOGIN_FAILURE,
    LOGIN_SUCCESS,
    LOGOUT,
    AXIOS_LOGOUT,
    // RESET_TIMEOUT,
    RESET_AXIOS_LOGOUT,
} from '../action/index'
import { REHYDRATE } from 'redux-persist/constants'

function setTimeout() {
    return Date.now() + 10 * 60 * 1000
}

const initialAuthState = {
    authenticated: false,
    isLoading: false,
    loaded: false,
    access_token: null,
    error: false,
    axiosLogout: false,
    // timeout: setTimeout(),
    // timeoutCount: 0,
}

export default function settingsReducer(state = initialAuthState, action) {
    switch (action.type) {
        case REHYDRATE:
            // console.log()
            // console.log(action.payload.auth)
            // return {};
            return {
                ...action.payload.auth,
                isLoading: false,
                loaded: false,
            } || {};
        case LOGIN:
            return {
                ...state,
                isLoading: true,
                error: false
            }
        // case RESET_TIMEOUT:
        //     return {
        //         ...state,
        //         timeout: setTimeout(),
        //         timeoutCount: state.timeoutCount + 1,
        //     }
        case LOGIN_SUCCESS:
            return {
                ...state,
                isLoading: false,
                loaded: true,
                authenticated: true,
                access_token: action.payload.access_token,
                error: false,
                // timeout: setTimeout(),
                // timeoutCount: state.timeoutCount + 1,
                // ...action.payload
            }
        case LOGIN_FAILURE:
            return {
                ...state,
                loaded: true,
                isLoading: false,
                error: true
            }
        case LOGOUT:
            return {
                ...initialAuthState,
                authenticated: false,
                access_token: null,
            }
        case AXIOS_LOGOUT: {
            return {
                ...state,
                axiosLogout: true,
            }
        }
        case RESET_AXIOS_LOGOUT: {
            return {
                ...state,
                axiosLogout: false,
            }
        }
        case "OUTSIDE":
            console.log('Yeah')
            return { ...state }
        default:
            return state;
    }
}