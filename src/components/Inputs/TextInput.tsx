import React from 'react';
import { FormInput } from '../../types';
import './Inputs.css';

interface TextInputProps {
  register: any;
  input: FormInput;
  errors: any;
}

const TextInput = ({ register, errors, input }: TextInputProps) => {
  return (
    <React.Fragment>
      <label className="mb-2 text--bold d-block">{input.label}</label>
      <input
        type="text"
        ref={register}
        placeholder={input.placeholder}
        name={input.name}
        className={`input--text ${errors ? 'input--text--error' : ''}`}
      />
      <div className="form-field__error mt-2 mb-2"> {errors && errors.message} &nbsp; </div>
    </React.Fragment>
  );
};

export default TextInput;
