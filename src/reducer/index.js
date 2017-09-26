/**
 * Created by anjana on 14-08-2017.
 */
import { combineReducers } from 'redux';
import { reducer as FormReducer} from 'redux-form'
const rootReducer = combineReducers({
    form: FormReducer
});

export default rootReducer;
