import React from 'react';
import { shallow } from 'enzyme';

import { ShowUser } from '../src/pages/Users/ShowUser';

const props = {
  match: {
    params: {
      id: 1
    }
  }
};

describe('Testing ShowUser Page', () => {
  it('Snapshot renders', () => {
    const wrapper = shallow(<ShowUser {...props} />);

    expect(wrapper).toMatchSnapshot();
  });
});
