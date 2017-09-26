import {get, post} from "./axios"
export const GET_PRODUCT_LIST = "GET_PRODUCT_LIST";
export const ADD_PRODUCT = "ADD_PRODUCT";

export function getProductList(categoryId, callback){
    var response=get(`/category/${categoryId}`, {});
    response.then(callback);
    return {
        type: GET_PRODUCT_LIST,
        payload: response
    }
}

export function addProduct(values){
    var response=post(`/product`, values);
    return {
        type: ADD_PRODUCT,
        payload: response
    }
}