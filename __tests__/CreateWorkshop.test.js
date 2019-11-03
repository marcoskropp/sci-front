import React from 'react';
import { shallow } from 'enzyme';

import CreateWorkshop from '../src/pages/Workshops/CreateWorkshop';

describe('Testing CreateWorkshop Page', () => {
  it('Snapshot renders', () => {
    const wrapper = shallow(<CreateWorkshop />);

    expect(wrapper).toMatchSnapshot();
  });
});
