import {GET_PRODUCT_LIST} from "../action/product_action";

export default (state={}, action) => {
    console.log(action)
  switch(action){
      case GET_PRODUCT_LIST:
          return action.payload.data.data;

  }
  return state;
}
