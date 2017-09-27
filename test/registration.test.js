import React from "react";
import {expect} from "chai";
import {mount} from "enzyme";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import Registration from "../src/container/registration";
import {
    DateComponent,
    EmailComponent, GenderComponent, PasswordComponent, TextAreaComponent, TextComponent,
    TypeComponent
} from "../src/component/input";
import {describe} from "nyc";

describe("Login Form", () => {

    const mockStore = configureStore();
    it("should render registration page without Buyer or Seller specific fields", () => {
        const wrapper = mount(
            <Provider store = {mockStore({form: {}, user:{}})}>
                <Registration />
            </Provider>
        );

        expect(wrapper.find(TextComponent).length).to.equals(3);
        expect(wrapper.find(TextAreaComponent).length).to.equals(1);
        expect(wrapper.find(PasswordComponent).length).to.equals(2);
        expect(wrapper.find(EmailComponent).length).to.equals(1);
        expect(wrapper.find(TypeComponent).length).to.equals(1);
        expect(wrapper.find(GenderComponent).length).to.equals(0);
        expect(wrapper.find(DateComponent).length).to.equals(0);
    });

    it("should render registration page with Buyer specific fields also when type is Buyer", () => {
        const wrapper = mount(
            <Provider store = {mockStore({form: {}, user:{}})}>
                <Registration />
            </Provider>
        );

        wrapper.find("select").simulate('change', {target: {value: '0'}});
        expect(wrapper.find(TextComponent).length).to.equals(3);
        expect(wrapper.find(TextAreaComponent).length).to.equals(1);
        expect(wrapper.find(PasswordComponent).length).to.equals(2);
        expect(wrapper.find(EmailComponent).length).to.equals(1);
        expect(wrapper.find(TypeComponent).length).to.equals(1);
        expect(wrapper.find(GenderComponent).length).to.equals(1);
        expect(wrapper.find(DateComponent).length).to.equals(1);
    });

    it("should render registration page with Seller specific fields also when type is Seller", () => {
        const wrapper = mount(
            <Provider store = {mockStore({form: {}, user:{}})}>
                <Registration />
            </Provider>
        );

        wrapper.find("select").simulate('change', {target: {value: '1'}});
        expect(wrapper.find(TextComponent).length).to.equals(6);
        expect(wrapper.find(TextAreaComponent).length).to.equals(1);
        expect(wrapper.find(PasswordComponent).length).to.equals(2);
        expect(wrapper.find(EmailComponent).length).to.equals(1);
        expect(wrapper.find(TypeComponent).length).to.equals(1);
        expect(wrapper.find(GenderComponent).length).to.equals(0);
        expect(wrapper.find(DateComponent).length).to.equals(0);
    });

    it("should render no error message by default", () => {
        const wrapper = mount(
            <Provider store = {mockStore({form: {}, user:{}})}>
                <Registration />
            </Provider>
        );

        expect(wrapper.find(".text-error").text()).to.equals(" ")
    });

    it("should render no error message by default", () => {
        const wrapper = mount(
            <Provider store = {mockStore({form: {}, user:{}})}>
                <Registration />
            </Provider>
        );


        expect(wrapper.find(".text-error").text()).to.equals(" ")
    });

});
