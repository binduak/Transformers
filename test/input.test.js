import React from "react"
import { expect } from 'chai'
import Adapter from 'enzyme-adapter-react-15';
import {TextComponent} from '../src/component/input'
import {describe, it} from "mocha";
import {configure, shallow} from "enzyme";
configure({ adapter: new Adapter() })

const wrapper = shallow(<TextComponent />);
describe('(Component) TextComponent', () => {
    it
    ('renders...', () => {
        expect(wrapper).to.have.length(1);
    });
});

