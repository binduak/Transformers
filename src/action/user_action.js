import {post} from "./axios"
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const REGISTER_USER = "REGISTER_USER";

export function register(values, callback){
    var response=post(('/user/' + ((values.type == 0) ? 'registerBuyer' : 'registerSeller')), values);
    response.then(callback);
    return {
        type: REGISTER_USER,
        payload: response
    }
}
export function login(values, callback){
    var response=post('/user/login', values);
    response.then(callback);
    return {
        type: LOGIN_SUCCESS,
        payload: response
    }
}
