import axios from "../Services/axios";
import { url } from "../Services/config";
// import store from '../../store';
import { params } from "../Services/config";

import _ from "lodash";

export const FETCH_USER = "FETCH_USER";
export const FETCH_USER_SUCCESS = "FETCH_USER_SUCCESS";
export const FETCH_USER_FAILURE = "FETCH_USER_FAILURE";

export const LOGIN = "LOGIN";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";

export const RESET_TIMEOUT = "RESET_TIMEOUT";

export const LOGOUT = "LOGOUT";
export const AXIOS_LOGOUT = "AXIOS_LOGOUT";
export const RESET_AXIOS_LOGOUT = "RESET_AXIOS_LOGOUT";

export const fetchUser = () => ({
    type: FETCH_USER
  });
  
  export const fetchUserSucess = data => ({
    type: FETCH_USER_SUCCESS,
    payload: data
  });
  
  export const fetchUserFailure = data => ({
    type: FETCH_USER_FAILURE,
    payload: data
  });

  export const usedApp = () => ({
    type: USED_APP
  });
  
  export const loginSucess = data => ({
    type: LOGIN_SUCCESS,
    payload: data
  });
  
  export const loginFailure = data => ({
    type: LOGIN_FAILURE,
    payload: data
  });
  
  export const logout = () => ({
    type: LOGOUT
  });
  
  export const axiosLogout = () => ({
    type: AXIOS_LOGOUT
  });
  
  export const resetAxiosLogout = () => ({
    type: RESET_AXIOS_LOGOUT
  });


  export const login = data => {
    return (dispatch, getState) => {
      return axios
        .post("https://5bd3f84c.ngrok.io/auth/login", {
          ...data,
          ...params
        })
        .then(({ data }) => {
          // console.log({ data });
          data = _.merge(data, data.user);
          delete data.user;
          dispatch({
            type: LOGIN_SUCCESS,
            payload: data
          });
          return data;
        });
    };
  };