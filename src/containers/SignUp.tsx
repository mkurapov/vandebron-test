import React, { useState, useEffect } from 'react';
import { FormInput } from '../types';
import TextInput from '../components/TextInput';
import RadioInput from '../components/RadioInput';
import useForm from 'react-hook-form';
import './SignUp.css';

const SignUpFormModel:FormInput[] = [ {
    name: 'name',
    type: 'text',
    label: 'Full Name',
    register: { required: 'Full name is required' }
}, {
    name: 'email',
    type: 'text',
    label: 'Email',
    register: { required: true, pattern: {
        value: /^\S+@\S+$/,
        message: 'Please check email address'
      } }
}, {
    name: 'address_number',
    type: 'text',
    label: 'House Number',
    register: { required: true }
}, {
    name: 'address_street',
    type: 'text',
    label: 'Address Street',
    register: { required: true }
}, {
    name: 'address_zipcode',
    type: 'text',
    label: 'Address Zip',
    register: { required: true }

}, {
    name: 'gender',
    type: 'radio',
    options: ['male', 'female'],
    label: 'Gender',
    register: { required: true }
}, ]

const SignUp = () => {
    const { register, handleSubmit, errors } = useForm(); // initialise the hook

    useEffect(() => {
    }, [errors])

    const onSubmit = (data:any) => console.log(data);


    const mapFormTypeToComponent = (input:FormInput, index:number) => {
        return (
            <div key={input.name} className="col-md-6 col-12 mb-2">
                {
                    (() => { 
                        switch(input.type) {
                            case 'text': {
                                return (<TextInput name={input.name} hasError={errors[input.name] != null} label={input.label} register={register(input.register)}></TextInput>)
                            }
                            case 'radio': {
                                return (<RadioInput name={input.name} hasError={errors[input.name] != null} label={input.label}  register={register(input.register)} options={input.options}></RadioInput>)
                            }
                            default: {
                                return <div></div>
                            }
                        }
                    })()
                }
                <div className="form-field__error mt-2 mb-2"> { errors[input.name] && errors[input.name]!.message }</div>
            </div>
        )
    }

    return (
        <div>
            <h1 className="text--lg">Please add your details</h1>
            <form className="sign-up-form row py-4 px-3" onSubmit={handleSubmit(onSubmit)}>
                { SignUpFormModel.map((input:FormInput, i:number) =>  mapFormTypeToComponent(input,i)) }
                <div className="col-12">
                    <input className="btn" type="submit" value="Sign Up" />
                </div>
            </form>
        </div>
    );
}

export default SignUp;