import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';

import { List } from '../../containers/list/List';

Enzyme.configure({ adapter: new EnzymeAdapter() });

it('renders component', () => {
  const wrapper = shallow(<List />);
  const listComponent = wrapper.find("[data-test='component-list']");
  expect(listComponent.length).toBe(1);
});
