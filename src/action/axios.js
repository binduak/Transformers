import axios from "axios"
const json = {
    baseURL: 'http://localhost:8080',
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    },
    withCredentials: true,
    credentials: 'same-origin',
    responseType: 'json'
}
export function post(action, body){
    json.method = 'post';
    json.url = action;
    json.data= body;
    return axios(json);
}
export function get(action){
    json.method = 'get';
    json.url = action;
    console.log(json);
    return axios(json);
}