import {GET_ITEM_LIST} from "../action/item_action";

export default (state={}, action) => {
  switch(action.type){
      case GET_ITEM_LIST:
          return action.payload.data.data;

  }
  return state;
}
