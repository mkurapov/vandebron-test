import React, { useEffect } from 'react';
import { FormInput, InputComponent } from '../types';
import '../containers/SignUp/SignUp.css';

interface TextInputProps {
  register:any,
  input: FormInput,
  hasError: boolean,
}

const TextInput = ({ register, hasError, input }:TextInputProps) => {

  return (
    <React.Fragment>
      <label className="mb-2 text--bold d-block">{ input.label }</label>
      <input type="text" ref={register} placeholder={input.placeholder} name={input.name} className={`input--text ${hasError ? 'input--text--error' : ''}`}/>
    </React.Fragment>
  );
}

export default TextInput;