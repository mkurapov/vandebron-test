import React from 'react';
import './SignUp.css';
import { signUpForm } from './signUpForm';
import { FormInput } from '../types';
import TextInput from '../components/TextInput';
import RadioInput from '../components/RadioInput';

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

    const renderForm = () => {
        return signUpForm.map((input:FormInput) =>  mapFormTypeToComponent(input));
    };

    return (
    <div>
        <h1 className="text--lg">Please add your details</h1>
        <form className="sign-up-form row py-4 px-3">
            { renderForm() }
            <div className="col-12">
                <input className="btn"  type="submit" value="Sign Up" />
            </div>
        </form>
    </div>
    );
}

export default SignUp;