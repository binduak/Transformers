
import {LOGIN_SUCCESS} from "../action/user_action";

export default (state={}, action) => {
  switch(action){
      case LOGIN_SUCCESS:
          return action.payload.data.data;

  }
  return state;
}
