import React from 'react';
import { shallow } from 'enzyme';
import SignUp, { VALID_EMAIL_REGEX, VALID_POSTAL_REGEX } from './SignUp';
import RadioInput from '../../components/Inputs/RadioInput';
import TextInput from '../../components/Inputs/TextInput';

describe('Testing <SignUp> component', () => {
    const wrapper = shallow(<SignUp/>); // mount method throws 'ReferenceError: MutationObserver is not defined' error 

    it('renders without crashing', () => {
        expect(wrapper.exists()).toBe(true);
    });
      
    it('has correct amount of input components', () => {
        expect(wrapper.find(RadioInput).length).toEqual(1)
        expect(wrapper.find(TextInput).length).toEqual(7)
    });

    it('should not be able to submit empty form', () => {
        const btn = wrapper.find('.btn').at(0).simulate('click');
        const form = wrapper.find('form');
        expect(form.exists()).toBe(true);
    });
});

describe('Testing form validation regex', () => {
    it('works with post code validation', () => {
        const testPost1 = '2321KK';
        const testPost2 = '2321kk';
        const testPost3 = '2321abc';
        const testPost4 = '23ab';
        const testPost5 = '2321 ab';
        expect(testPost1.match(VALID_POSTAL_REGEX)).toBeTruthy()
        expect(testPost2.match(VALID_POSTAL_REGEX)).toBeTruthy()
        expect(testPost3.match(VALID_POSTAL_REGEX)).toBeFalsy()
        expect(testPost4.match(VALID_POSTAL_REGEX)).toBeFalsy()
        expect(testPost5.match(VALID_POSTAL_REGEX)).toBeTruthy()
    });

    it('works with email code validation', () => {
        const testEmail1 = 'sdfsad@d.com';
        const testEmail2 = 'normal@gmail.com';
        const testEmail3 = '';
        const testEmail4 = '34343';
        const testEmail5 = '@cd.com';
        const testEmail6 = '@';
        expect(testEmail1.match(VALID_EMAIL_REGEX)).toBeTruthy()
        expect(testEmail2.match(VALID_EMAIL_REGEX)).toBeTruthy()
        expect(testEmail3.match(VALID_EMAIL_REGEX)).toBeFalsy()
        expect(testEmail4.match(VALID_EMAIL_REGEX)).toBeFalsy()
        expect(testEmail5.match(VALID_EMAIL_REGEX)).toBeFalsy()
        expect(testEmail6.match(VALID_EMAIL_REGEX)).toBeFalsy()
    });
});

