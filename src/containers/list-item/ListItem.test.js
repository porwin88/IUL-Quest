import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';

import { ListItem } from '../../containers/list-item/ListItem';

Enzyme.configure({ adapter: new EnzymeAdapter() });

it('renders component', () => {
  const mockShowDetails = {
    item: {
      question: 'answer',
    }
  };
  const mockItem = {
    data: [
      {testQ1: 'testA1'},
      {testQ2: 'testA2'}
    ]
  }
  const wrapper = shallow(<ListItem showDetails={mockShowDetails} item={mockItem} />);
  const listItemComponent = wrapper.find("[data-test='component-listitem']");
  expect(listItemComponent.length).toBe(1);
});


