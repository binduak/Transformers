import {get} from "./axios"
export const GET_CATEGORY_LIST = "GET_CATEGORY_LIST";

export function getCategoryList(callback){
    var response=get('/category/getAllCategory', {});
    response.then(callback);
    return {
        type: GET_CATEGORY_LIST,
        payload: response
    }
}