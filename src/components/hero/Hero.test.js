import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';

import Hero from './Hero';

Enzyme.configure({ adapter: new EnzymeAdapter() });

it('renders component', () => {
  const wrapper = shallow(<Hero />);
  const heroComponent = wrapper.find("[data-test='component-hero']");
  expect(heroComponent.length).toBe(1);
});