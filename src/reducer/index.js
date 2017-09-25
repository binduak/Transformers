/**
 * Created by anjana on 14-08-2017.
 */
import { combineReducers } from 'redux';
import { reducer as FormReducer} from 'redux-form'
import UserReducer from './user_reducer'
const rootReducer = combineReducers({
    form: FormReducer
});

export default rootReducer;