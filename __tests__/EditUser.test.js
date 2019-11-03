import React from 'react';
import { shallow } from 'enzyme';

import { EditUser } from '../src/pages/Users/EditUser';

const props = {
  history: {
    push: () => {}
  },
  match: {
    params: {
      id: 1
    }
  }
};

describe('Testing EditUser Page', () => {
  it('Snapshot renders', () => {
    const wrapper = shallow(<EditUser {...props} />);

    expect(wrapper).toMatchSnapshot();
  });
});
