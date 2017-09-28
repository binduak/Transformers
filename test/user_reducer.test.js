import {expect} from 'chai';
import reducer from '../src/reducer/user_reducer'
import {LOGIN_SUCCESS} from "../src/action/user_action";

describe("User Reducers", () => {

    it("should give empty json by default", () => {
        let reducedState = reducer({}, {type: 'LOGOUT'});
        expect(reducedState.name).to.equals(undefined);
    });

    it("should give user name on login", () => {
        let reducedState = reducer({}, {type: LOGIN_SUCCESS, payload:{data:{data:{name:"Anjana"}}}});
        expect(reducedState.name).to.equals("Anjana");
    });

});
