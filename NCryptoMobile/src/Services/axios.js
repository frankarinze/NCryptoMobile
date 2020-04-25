import axios from 'axios';
import { store } from '../../App';
// import store from '../../store'
import NavigationService from '../../navigator'


function logout() {
    store.dispatch({ type: "AXIOS_LOGOUT" })
    store.dispatch({ type: "LOGOUT" })
}

// function timeoutCheck(auth) {
//     if (!auth.timeout) {
//         logout()
//     } else if (auth.timeout < Date.now()) {
//         logout()
//     }
// }

const authPath = [ "token", "logout", "forgot", "update", "reset", "register", "verify_phone", "create"]

// Add a request interceptor
axios.interceptors.request.use(function (config) {
    // Do something before request is sent
    const auth = store.getState().auth;
    const url = /[^/]*$/.exec(config.url)[0];

    // if (!authPath.includes(url)) {
    //     store.dispatch({ type: "RESET_TIMEOUT" })
    // }
    // timeoutCheck(auth)
    return config;
}, function (error) {
    // Do something with request error
    console.log(error.response)
    if (error && error.response && error.response.status == 403 || error.response.status == 401) {
        logout()
        return Promise.reject(error);
        console.log(error.response)
    }
    console.log(error);
    return Promise.reject(error);
});

// Add a response interceptor
axios.interceptors.response.use(function (response) {
    // Do something with response data
    if (response && response.data && response.data.message && response.data.message == 'Unauthenticated.') {
        console.log('yayy')
    }

    return response;
}, function (error) {
    console.log(error.request.responseURL)
    if (error.request && error.request._response == 'The Internet connection appears to be offline.') {
        error.request._response = `You are not connected to the internet!`
        return Promise.reject(error);
    }
    // console.log(error.response)
    if (error && error.response && error.response.status == 403 || error.response.status == 401) {
        logout()
        return Promise.reject(error);
        // console.log(error.response)
    }
    return Promise.reject(error);
});

export default axios;