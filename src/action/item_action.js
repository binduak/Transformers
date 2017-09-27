import {get, post} from "./axios"
export const GET_ITEM_LIST = "GET_ITEM_LIST";
export const ADD_ITEM = "ADD_ITEM";

export function getItemsList(categoryId, categoryName, callback){
    var response=get(`/items?categoryId=${categoryId}&categoryName=${categoryName}`, {});
    response.then(callback);
    return {
        type: GET_ITEM_LIST,
        payload: response
    }
}

export function addItem(values){
    var response=post(`/items`, values);
    return {
        type: ADD_ITEM,
        payload: response
    }
}