import React from 'react';
import { FormInput, InputComponent } from '../types';
import '../containers/SignUp.css';


interface RadioInputProps {
  register:any,
  label: string,
  hasError: boolean,
  options: any,
  name: string
}


const RadioInput = ({ register, label, hasError, options, name, ...rest }:RadioInputProps) => {
  return (
    <React.Fragment>
      <label className="text--bold mb-2 d-block">{ label }</label>
      <div className="d-flex align-items-center">
      { options && options.map((o:any, i:number) => 
      (
        <div key={i} className="mr-3 py-2"> 
          <input ref={register} name={name} className="mr-2" type="radio" value={o} />
          <label htmlFor={o}>{ o }</label>
        </div>
      ))}
      </div>
    </React.Fragment>
  );
}

export default RadioInput;