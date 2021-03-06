import React from 'react';
import { shallow } from 'enzyme';
import { name, lorem, random } from 'faker';

import TableRow from '../src/components/TableRow';

const props = {
  title: name.title(),
  description: lorem.words(),
  place: lorem.word(),
  startDate: lorem.word(),
  endDate: lorem.word(),
  subscribed: random.boolean(),
  checkWorkshop: () => {}
};

describe('Testing TableRow Component', () => {
  it('Snapshot renders', () => {
    const wrapper = shallow(<TableRow {...props} />);

    expect(wrapper).toMatchSnapshot();
  });
});
