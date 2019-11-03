import React from 'react';
import { shallow } from 'enzyme';

import Subscriptions from '../src/pages/Subscriptions/Subscriptions';

describe('Testing Subscriptions Page', () => {
  it('Snapshot renders', () => {
    const wrapper = shallow(<Subscriptions />);

    expect(wrapper).toMatchSnapshot();
  });
});
