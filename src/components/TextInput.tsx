import React, { useEffect } from 'react';
import { FormInput, InputComponent } from '../types';
import '../containers/SignUp.css';

interface TextInputProps {
  register:any,
  label: string,
  hasError: boolean,
  name: string
}

const TextInput = ({ register, label, hasError, name, ...rest }:TextInputProps) => {

  return (
    <React.Fragment>
      <label className="mb-2 text--bold d-block">{ label }</label>
      <input type="text" ref={register} {...rest} name={name} className={`input--text ${hasError ? 'input--text--error' : ''}`}/>
    </React.Fragment>
  );
}

export default TextInput;