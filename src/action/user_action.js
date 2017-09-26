import axios from "axios"
import { SubmissionError } from 'redux-form'
import * as browserHistory from "redux-form";
let ROOT_URL = 'http://10.136.22.124:8080/'
export function register(user){
    console.log(user)
    let url=`${ROOT_URL}user/`+ (user.type===0)?'registerBuyer':'registerSeller';
    let response = axios.post(url, user);
    response.then(

        () => {console.log("CHanging");browserHistory.arrayPush('/');}
    ).catch((error) => {
        console.log('error', error.response);
        throw new SubmissionError({ _error: error.response.data});
    })

    return {
        type: 'REGISTER_USER',
        payload: response
    }
}
