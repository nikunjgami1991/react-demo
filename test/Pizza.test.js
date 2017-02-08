import React from 'react';
import {shallow, mount} from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import { expect } from 'chai';
import Pizza from './../src/Components/Pizza';
const data = require('./../pizza.json');

describe('Pizz Component',() => {
    
    let wrapper;
    beforeEach(() => {
        wrapper = null;        
    });

    it('It renders Pizza properly.', () => {
        wrapper = shallow(<Pizza pizza={data.pizzas[0]}/>);
        expect(wrapper.text()).to.equal('<styled.li />');           
    });

    afterEach(() => {
        wrapper.unmount();
    });
});