import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';

import Details from './Details';

Enzyme.configure({ adapter: new EnzymeAdapter() });

it('renders component', () => {
  const mockItem = {
    choices: [
      {choice: 'testChoice', votes: 2},
    ]
  }
  const wrapper = shallow(<Details item={mockItem}/>);
  const detailsComponent = wrapper.find("[data-test='component-details']");
  expect(detailsComponent.length).toBe(1);
});
