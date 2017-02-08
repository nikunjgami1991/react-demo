import React from 'react';
import {shallow, mount} from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import { expect } from 'chai';
import PizzaComponent from './../src/Components/PizzaComponent';
const data = require('./../pizza.json');

describe('AppComponent Component',() => {
    
    let wrapper;
    beforeEach(() => {
        wrapper = null;        
    });

    it('It renders PizzaComponent parent container properly.', () => {
        wrapper = shallow(<PizzaComponent pizzas={data.pizzas}/>);
        expect(wrapper.type()).to.equal('div');       
    });

    afterEach(() => {
        wrapper.unmount();
    });
});