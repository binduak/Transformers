import {expect} from 'chai';
import nock from 'nock';
import ReduxPromise from 'redux-promise';
import configureMockStore from 'redux-mock-store';
import {login, register, REGISTER_USER} from '../src/action/user_action';
import * as sinon from "sinon";

describe("Login Actions", () => {

    let mockStore, api, store;
    let loginFormStub = {username: '1$tw', password: '123456'};
    let registerBuyerStub = {name:'1', username: '1$tw', password: '123456', type:'0'};
    let registerSellerStub = {name:'1', username: '1$tw', password: '123456', type:'1'};
    let responseStub = {data: {}, responseStatus: 'Success'};

    before(() => {
        mockStore = configureMockStore([ReduxPromise]);
        api = nock("http://localhost:8080");
    });

    beforeEach(() => {
        store = mockStore({});
    });

    afterEach(() => {
        store.clearActions();
        nock.cleanAll()
    });

    it("should submit a post request to /login and dispatch actions", (done) => {
        const request = api.post(`/user/login`).reply(200, responseStub);

        store.dispatch(login(loginFormStub))
            .then((resp) => {
                request.done();
                expect(store.getActions()[0].type).to.equal("LOGIN_SUCCESS");
                done();
            })
            .catch(done);

    });

    it("should call the callbacks for login", (done) => {
        var callback =sinon.spy();
        store.dispatch(login(loginFormStub, callback)).then(()=>{
            expect(callback.called).to.equals(true);
            done();
        }).catch(done)


    });


    it("should submit a post request to /user/registerBuyer if user type is buyer and dispatch actions", (done) => {
        const request = api.post(`/user/registerSeller`).reply(200, responseStub);

        store.dispatch(register(registerSellerStub))
            .then((resp) => {
                request.done();
                expect(store.getActions()[0].type).to.equal(REGISTER_USER);
                done();
            })
            .catch(done);

    });

    it("should submit a post request to /user/registerBuyer if user type is buyer and dispatch actions", (done) => {
        const request = api.post(`/user/registerBuyer`).reply(200, responseStub);

        store.dispatch(register(registerBuyerStub))
            .then((resp) => {
                request.done();
                expect(store.getActions()[0].type).to.equal(REGISTER_USER);
                done();
            })
            .catch(done);

    });

    it("should call the callbacks for register", (done) => {
        var callback =sinon.spy();
        store.dispatch(register(registerBuyerStub, callback)).then(()=>{
            expect(callback.called).to.equals(true);
            done();
        }).catch(done)


    });

});
