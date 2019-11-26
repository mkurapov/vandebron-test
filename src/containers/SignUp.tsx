import React from 'react';
import { FormInput } from '../types';
import TextInput from '../components/TextInput';
import RadioInput from '../components/RadioInput';
import './SignUp.css';

const SignUpFormModel:FormInput[] = [ {
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

const SignUp = () => {

    const doWork = (dog:any, cat:any) => {
        console.log(dog, cat);
    }

    const mapFormTypeToComponent = (input:FormInput) => {
        return (
            <div key={input.name} className="col-md-6 col-12 mb-2">
                {
                    (() => { 
                        switch(input.type) {
                            case 'text': {
                                return (<TextInput input={input} value={''} onChange={doWork}></TextInput>)
                            }
                            case 'radio': {
                                return (<RadioInput input={input} value={''} onChange={doWork}></RadioInput>)
                            }
                            default: {
                                return <div></div>
                            }
                        }
                    })()
                }
                <div className="form-field__error mt-2">{  }</div>
            </div>
        )
    }

    return (
    <div>
        <h1 className="text--lg">Please add your details</h1>
        <form className="sign-up-form row py-4 px-3">
            { SignUpFormModel.map((input:FormInput) =>  mapFormTypeToComponent(input)) }
            <div className="col-12">
                <input className="btn"  type="submit" value="Sign Up" />
            </div>
        </form>
    </div>
    );
}

export default SignUp;