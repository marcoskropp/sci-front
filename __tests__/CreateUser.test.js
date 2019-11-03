import React from 'react';
import { shallow } from 'enzyme';

import CreateUser from '../src/pages/Users/CreateUser';

describe('Testing CreateUser Page', () => {
  it('Snapshot renders', () => {
    const wrapper = shallow(<CreateUser />);

    expect(wrapper).toMatchSnapshot();
  });
});
