import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import configureStore from "redux-mock-store";
import {Provider} from "react-redux";
// Before your test, do next setting 
const middlewares = []; // If you are not using any middleware, leave the array empty or import it and put it in
const mockStore = configureStore(middlewares); // Setting of store based on the middlewares.
const initState = {
     // Define test values of sidebarDataSlice and loginDataSlice
};
// Create the store to pass as prop in the <Provider>
const store = mockStore(initState);
import SearchBar from './SeacrchBar';
Enzyme.configure({adapter: new Adapter()});

describe("<SearchBar/>", () => {
    let wrapper;
	beforeEach(() => {
		wrapper = shallow(<SearchBar/>);
	});   
 
    it('It should render one <form />', () => {
		expect(wrapper.find("form")).toHaveLength(1);
	});

    it('The h2 should contain the text "Search Recipes"', () => {
        expect(wrapper.find('h2').at(0).text()).toEqual('Search Recipes');
	});

    it('It should render one <button />', () => {
		expect(wrapper.find("button")).toHaveLength(1);
	});
    it('The button should contain the text "search"', () => {
        expect(wrapper.find('button').at(0).text()).toEqual('search');
	});
    it('It should render one <input />', () => {
		expect(wrapper.find("input")).toHaveLength(1);
	});
    it('The input should have the right className', () => {
        expect(wrapper.find('input').at(0).props().className).toEqual('searchBar');
	});
})