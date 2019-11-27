import React, { useState } from 'react';
import { FormInput, UserDTO } from '../../types';
import TextInput from '../../components/Inputs/TextInput';
import RadioInput from '../../components/Inputs/RadioInput';
import useForm from 'react-hook-form';
import api from '../../api';
import Confetti from 'react-dom-confetti';

export const VALID_EMAIL_REGEX = /^\S+@\S+$/;
export const VALID_POSTAL_REGEX = /^[1-9][0-9]{3} ?(?!sa|sd|ss)[a-zA-Z]{2}$/;

// register object is for the react-hook-form library: https://react-hook-form.com/api#register
const SignUpFormModel: FormInput[] = [
  {
    name: 'name',
    type: 'text',
    label: 'Full Name',
    register: { required: 'Full name is required' },
  },
  {
    name: 'email',
    type: 'text',
    label: 'Email',
    register: {
      required: 'Please provide correct email',
      pattern: {
        value: VALID_EMAIL_REGEX,
        message: 'Please provide correct email',
      },
    },
  },
  {
    name: 'phone',
    type: 'text',
    label: 'Phone',
    register: { required: 'Phone number required' },
  },
  {
    name: 'address_number',
    type: 'text',
    label: 'Apartment/House Number',
    register: { required: 'Apartment/house number is required' },
  },
  {
    name: 'street',
    type: 'text',
    label: 'Street',
    register: { required: 'Street is required' },
  },
  {
    name: 'city',
    type: 'text',
    label: 'City',
    register: { required: 'City is required' },
  },
  {
    name: 'postcode',
    type: 'text',
    label: 'Postcode',
    register: {
      required: 'Postcode is required',
      pattern: {
        value: VALID_POSTAL_REGEX,
        message: 'Please provide correct Dutch postcode (eg. 2321KK)',
      },
    },
  },
  {
    name: 'gender',
    type: 'radio',
    options: ['Male', 'Female'],
    label: 'Gender',
    register: { required: 'Gender is required' },
  },
];

const SignUp = () => {
  const { register, handleSubmit, errors } = useForm();
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [userName, setUserName] = useState('');

  const onSubmit = (data: any) => {
    api
      .post('/subscriptions', mapSignUpFormToUserDTO(data))
      .then(res => {
        setHasSubmitted(true);
        setUserName(res.data.name);
      })
      .catch(/* TODO: add error feedback */);
  };

  const mapSignUpFormToUserDTO = (form: any): UserDTO => {
    return {
      name: form.name,
      email: form.email,
      phone: form.phone,
      gender: form.gender,
      address: {
        number: form.address_number,
        street: form.street,
        zipcode: form.postcode,
        city: form.city,
      },
    };
  };

  // TODO: turn into a higher order component
  const mapFormTypeToComponent = (input: FormInput, index: number) => {
    return (
      <div key={input.name} className="col-md-6 col-12 mb-1">
        {(() => {
          switch (input.type) {
            case 'text': {
              return (
                <TextInput input={input} errors={errors[input.name]} register={register(input.register)}></TextInput>
              );
            }
            case 'radio': {
              return (
                <RadioInput input={input} errors={errors[input.name]} register={register(input.register)}></RadioInput>
              );
            }
            default: {
              return <div></div>;
            }
          }
        })()}
      </div>
    );
  };

  return (
    <div>
      <div className="text-center">
        <Confetti active={hasSubmitted} />
      </div>
      {!hasSubmitted ? (
        <React.Fragment>
          <h1 className="text--lg">Please enter your details</h1>
          <form className="box-shadow--lg row py-4 px-3" onSubmit={handleSubmit(onSubmit)}>
            {SignUpFormModel.map((input: FormInput, i: number) => mapFormTypeToComponent(input, i))}
            <div className="col-12">
              <input className="btn" type="submit" value="Sign Up" />
            </div>
          </form>
        </React.Fragment>
      ) : (
        <h1 className="text--lg">Thanks for signing up{', ' + userName}!</h1>
      )}
    </div>
  );
};

export default SignUp;
