import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';

import { List } from './List';

Enzyme.configure({ adapter: new EnzymeAdapter() });

it('renders component', () => {
  const wrapper = shallow(<List />);
  const listComponent = wrapper.find("[data-test='component-list']");
  expect(listComponent.length).toBe(1);
});

it('renders the correct number of children', () => {
  const mockQuestions = [{url: 'test'}, {url: 'test2'} ];
  const wrapper = mount(<List questions={mockQuestions} />);
  const listItemComponent = wrapper.find("[data-test='component-listitem']");
  expect(listItemComponent.length).toBe(2);
});

