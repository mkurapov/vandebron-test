import React from 'react';
import { shallow } from 'enzyme';
import SubscriptionList from './SubscriptionList';


describe('Testing <SubscriptionList> component', () => {
    const wrapper = shallow(<SubscriptionList/>); // mount method throws 'ReferenceError: MutationObserver is not defined' error 

    it('renders without crashing', () => {
        expect(wrapper.exists()).toBe(true);
    });  
});

