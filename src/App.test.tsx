import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('Testing <App> component', () => {
  const wrapper = shallow(<App />);

  it('renders without crashing', () => {
    expect(wrapper);
  });
});
