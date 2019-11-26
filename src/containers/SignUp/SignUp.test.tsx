import React from 'react';
import { shallow, mount } from 'enzyme';
import SignUp from './SignUp';
import RadioInput from '../../components/RadioInput';

it('renders without crashing', () => {
  shallow(<SignUp/>)
});

it('has one radio input', () => {
    const wrapper = mount(<SignUp/>);
    expect(wrapper.children(RadioInput).length).toEqual(1)
});