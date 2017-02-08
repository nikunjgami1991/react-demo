import React from 'react';
import {shallow, mount} from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import { expect } from 'chai';
import AppComponent from './../src/Components/AppComponent';
const data = require('./../pizza.json');

describe('AppComponent Component',() => {
    
    let wrapper;
    beforeEach(() => {
        wrapper = null;        
    });

    it('It renders AppComponent without data properly.', () => {
        wrapper = shallow(<AppComponent/>);        
        expect(wrapper.text()).to.equal('<LoadingComponent />');       
    });

    it('It checks length of data properly.', () => {
        wrapper = shallow(<AppComponent/>);
        wrapper.setState({ pizzas: data.pizzas });                 
        expect(wrapper.state().pizzas.length).to.equal(9);;            
    });

    afterEach(() => {
        wrapper.unmount();
    });
});