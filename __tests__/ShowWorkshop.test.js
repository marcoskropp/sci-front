import React from 'react';
import { shallow } from 'enzyme';

import ShowWorkshop from '../src/pages/Workshops/ShowWorkshop';

describe('Testing ShowWorkshop Page', () => {
  it('Snapshot renders', () => {
    const wrapper = shallow(<ShowWorkshop />);

    expect(wrapper).toMatchSnapshot();
  });
});
