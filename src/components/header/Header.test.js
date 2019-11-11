import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';

import Header from './Header';

Enzyme.configure({ adapter: new EnzymeAdapter() });

it('renders component', () => {
  const wrapper = shallow(<Header />);
  const headerComponent = wrapper.find("[data-test='component-header']");
  expect(headerComponent.length).toBe(1);
});