import React from 'react';
import { shallow, mount } from 'enzyme';
import SignUp from './SignUp';
import RadioInput from '../../components/Inputs/RadioInput';
import TextInput from '../../components/Inputs/TextInput';


describe('Testing <SignUp> component', () => {
    const wrapper = shallow(<SignUp/>);

    it('renders without crashing', () => {
        expect(wrapper);
      });
      
    it('has correct amount of input components', () => {
        expect(wrapper.find(RadioInput).length).toEqual(1)
        expect(wrapper.find(TextInput).length).toEqual(7)
    });
    
    it("should allow entering input", () => {
        const content = wrapper.find("input").at(1);
    });
});

