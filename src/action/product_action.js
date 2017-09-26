import {get} from "./axios"
export const GET_PRODUCT_LIST = "GET_PRODUCT_LIST";

export function getProductList(categoryId, callback){
    var response=get(`/category/${categoryId}`, {});
    response.then(callback);
    return {
        type: GET_PRODUCT_LIST,
        payload: response
    }
}