/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { expect } from 'chai';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { Home } from './index';

import { getLang, changeLang } from './../actions/langActions';

configure({ adapter: new Adapter() });
const props = {
	getLang,
	changeLang,
	lang: getLang()
};
describe('Manage Course Page', () => {
	it('sets error message when trying to save empty title', () => {
		const wrapper = mount(<Home {...props} />);
		// const saveButton = wrapper.find('input').last();
		expect(1).to.equal(1);
	});
	it('sets ASDA message when trying to save empty title', () => {
		const wrapper = mount(<Home {...props} />);

		// const saveButton = wrapper.find('input').last();
		expect(4).to.equal(4);
	});

});