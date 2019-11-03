import React from 'react';
import { shallow } from 'enzyme';

import { EditWorkshop } from '../src/pages/Workshops/EditWorkshop';

const props = {
  match: {
    params: {
      id: 1
    }
  }
};


describe('Testing EditWorkshop Page', () => {
  it('Snapshot renders', () => {
    const wrapper = shallow(<EditWorkshop {...props} />);

    expect(wrapper).toMatchSnapshot();
  });
});
