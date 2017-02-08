import React from 'react';
import {shallow, mount} from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import { expect } from 'chai';
import LoadingComponent from './../src/Components/LoadingComponent';
const data = require('./../pizza.json');

describe('LoadingComponent Component',() => {
    
    let wrapper;
    beforeEach(() => {
        wrapper = null;        
    });

    it('It renders LoadingComponent properly with Loading Text.', () => {
        wrapper = shallow(<LoadingComponent noResultFound={false}/>); 
        expect(wrapper.text()).to.equal('Loading.....');        
    });

    it('It renders LoadingComponent properly with NoResult Text.', () => {
        wrapper = shallow(<LoadingComponent noResultFound={true}/>);        
        expect(wrapper.text()).to.equal('Sorry, No Result Found of entered value. Please reload the browser to search again.');       
    });

    afterEach(() => {
        wrapper.unmount();
    });
});