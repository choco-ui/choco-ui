import React from 'react';
import { shallow } from 'enzyme';
import Home from '../src/pages/home/Home';

describe('Home component', () => {
  it('renderer', () => {
    const wrapper = shallow(<Home />);
    expect(wrapper).toMatchSnapshot();
  });
});
