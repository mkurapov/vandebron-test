import { FormInput } from  '../types';

export const signUpForm:FormInput[] = [ {
    name: 'name',
    type: 'text',
    label: 'Full Name'
}, {
    name: 'email',
    type: 'text',
    label: 'Email'
},{
    name: 'gender',
    type: 'radio',
    options: [
        { value: 'male', label: 'Male' },
        { value: 'female', label: 'Female' }
    ],
    label: 'Gender'
},  {
    name: 'address_number',
    type: 'text',
    label: 'House Number'
}, {
    name: 'address_street',
    type: 'text',
    label: 'Adress Street'
}, {
    name: 'address_zipcode',
    type: 'text',
    label: 'Adress Zip'
},]