import axios from "axios"

let ROOT_URL = 'http://10.136.22.124:8080/'
export function register(user){
    console.log(user)
    let url=`${ROOT_URL}user/`+ (user.type===0)?'registerBuyer':'registerSeller';
    let response = axios.post(url, user)

    return {
        type: 'REGISTER_USER',
        payload: response
    }
}
